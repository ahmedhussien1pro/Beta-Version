import Handlebars from 'handlebars';
import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

Handlebars.registerHelper("evil", function (code: string) {
  return eval(code); // 🚨 UNSAFE! (For demonstration only)
});

export const lab2controller = async (req: Request, res: Response) => {
  let userInput = req.body.message;
  console.log("Lab Exercise - User Input:", userInput);

  const targetDir = path.resolve(__dirname, '../../../labs/SSTI/lab2/secretFolder');
  const filePath = path.join(targetDir, 'secret.txt');

  try {
    userInput = decodeURIComponent(userInput);
  } catch (err) {
    return res.send("<p>Error: Malformed input.</p>");
  }

  if (userInput.includes("execSync('")) {
    const commandMatch = userInput.match(/execSync\('(.+?)'\)/);
    if (commandMatch?.[1]) {
      let cmd = commandMatch[1].trim();

      if (cmd.includes("..") || cmd.includes("/") || cmd.includes("\\")) {
        return res.send("<p>Error: Invalid path.</p>");
      }

      const forcedCmd = `cd /D "${targetDir}" && ${cmd}`;
      const sanitizedCmd = forcedCmd
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"');

      userInput = `this.constructor.constructor("return process")().mainModule.require("child_process").execSync("${sanitizedCmd}").toString()`;
    }
  }

  try {
    const template = Handlebars.compile("<h4>message: {{evil name}}</h4>");
    const output = template({ name: userInput });

    // Check file existence BEFORE sending response
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        res.send("<h1>congratulation </h1>"+"\n"+`<h3> ${output}</h3>`);
      } else {
        res.send(output);
      }
    });

  } catch (err) {
    res.send(`<p>Error: ${err.message}</p>`);
  }
};

export const getStockStatus = (): string => {
  return Math.random() > 0.5 ? "In Stock" : "Out of Stock";
};

// Example usage
export const products = (req: Request, res: Response) => {
  res.json({ message: getStockStatus() });
};

export const resetLab2 = (req: Request, res: Response) => {
  try {
    const folderPath = path.join(__dirname, "secretFolder");
    const filePath = path.join(folderPath, "secret.txt");

    // Ensure the folder exists
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    // Create the file with default content
    fs.writeFileSync(filePath, "Lab 2 reset file", "utf8");

    res.status(200).json({ message: "secret.txt has been created successfully!" });
  } catch (error) {
    console.error("Error creating file:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};