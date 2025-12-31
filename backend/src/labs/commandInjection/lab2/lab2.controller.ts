import { exec } from "child_process";
import { platform } from "os";

/**
 * Validate if the input is a valid IP address or domain name.
 * @param {string} input - The input to validate.
 * @returns {boolean} - True if the input is valid, false otherwise.
 */
const isValidInput = (input) => {
  // Regular expression to match an IP address (e.g., 8.8.8.8)
  const ipRegex =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  // Regular expression to match a domain name (e.g., www.google.com)
  const domainRegex =
    /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/i;

  return ipRegex.test(input) || domainRegex.test(input);
};

/**
 * Check if the input is a safe and allowed command.
 * @param {string} input - The input to check.
 * @returns {boolean} - True if the command is allowed, false otherwise.
 */
const isAllowedCommand = (input) => {
  // List of allowed commands (for security, only allow specific commands)
  const isWindows = platform() === "win32";

  // Allowed commands for Unix-like systems (Linux, macOS)
  const unixCommands = ["date", "id", "whoami"];

  // Allowed commands for Windows
  const windowsCommands = [
    "date", // Displays or sets the system date
    "ver", // Displays the Windows version
    "hostname", // Displays the computer name
    "ipconfig", // Displays network configuration details
    "whoami", // Displays the current logged-in user
    "tasklist", // Lists all running processes
    "systeminfo", // Displays detailed system information
    "dir", // Lists files and directories in the current directory
    "cls", // Clears the command prompt screen
    "echo", // Displays messages or enables/disables command echoing
    "ping", // Checks network connectivity to a host
    "netstat", // Displays network connections and ports
    "chkdsk", // Checks the file system and disk for errors
    "shutdown", // Shuts down or restarts the computer
    "sfc /scannow", // Scans and repairs system files
  ];

  // Combine commands based on the platform
  const allowedCommands = isWindows ? windowsCommands : unixCommands;

  // Check if the input is in the allowed commands list
  return allowedCommands.includes(input.trim());
};

/**
 * Execute a command and return its output.
 * @param {string} command - The command to execute.
 * @returns {Promise<string>} - The output of the command.
 */
const executeCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        resolve(stderr || error.message);
      } else {
        resolve(stdout);
      }
    });
  });
};

/**
 * WARNING: This code allows execution of arbitrary commands.
 * Use with extreme caution and never in production environments.
 */
export const commandInjectionLab2 = async (req, res) => {
  const input = req.body.ip;

  if (!input) {
    return res.status(400).json({ error: "No input provided" });
  }

  // Sanitize the input to prevent command injection
  const sanitizedInput = input.replace(/[;&|<>$`]/g, "");

  // Split the input into parts based on the command separator (||)
  const parts = sanitizedInput.split("||").map((part) => part.trim());

  // Execute each part and collect the results
  const results = [];
  for (const part of parts) {
    if (isValidInput(part)) {
      const isWindows = platform() === "win32";
      const pingCommand = isWindows ? `ping ${part}` : `ping -c 4 ${part}`;
      const output = await executeCommand(pingCommand);
      results.push(output);
    } else if (isAllowedCommand(part)) {
      const output = await executeCommand(part);
      results.push(output);
    } else {
      results.push(`Error: Invalid input - ${part}`);
    }
  }

  // Combine the results into a single response
  res.json({ result: results.join("\n") });
};
