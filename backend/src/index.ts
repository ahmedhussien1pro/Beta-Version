import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from "path";
import registerRouter from "./registerWithAuthentication/register.router";
import loginRouter from "./login/login.router";
import logoutRouter from "./logout/logout.router";
import dashboardRouter from "./dashboard/dashboard.router";
import lab1 from "./labs/cookiesLab/lab1/lab1.router";
import lab2 from "./labs/cookiesLab/lab2/lab2.router";
import hiddenData from "./labs/sqlInjectionLabs/lab1/hiddenData.router";
import lab2xss from "./labs/xss/lab2&4/lab2.router";
import lab3sql from "./labs/sqlInjectionLabs/lab3,4/lab3.router";
import lab2sql from "./labs/sqlInjectionLabs/lab2/lab2.router";
import lab1UnrestrictedFile from "./labs/unrestrictedFileUpload/lab1/lab1.router";
import lab2UnrestrictedFile from "./labs/unrestrictedFileUpload/lab2/lab2.router";
import lab3UnrestrictedFile from "./labs/unrestrictedFileUpload/lab3/lab3.router";
import lab1IDORSRouter from "./labs/IDORS/lab1/lab1.router";
import lab2IDORSRouter from "./labs/IDORS/lab2/lab2.router";
import lab3IDORSRouter from "./labs/IDORS/lab3/lab3.router";
import userRouter from "./labs/AC-Vuln/Lab1/user.router";
import lab1BrokenAuthRouter from "./labs/brokenAuth/lab1/lab1.router";
import lab2BrokenAuthRouter from "./labs/brokenAuth/lab2/lab2.router";
import lab3BrokenAuthRouter from "./labs/brokenAuth/lab3/lab3.router";
import lab2apiHacking from "./labs/apiHacking/lab2/lab2.router";
import lab1PathTraversalRouter from "./labs/pathTraversal/lab1/lab1.router";
import lab1CommendInjection from "./labs/commandInjection/lab1/lab1.router";
import lab2CommendInjection from "./labs/commandInjection/lab2/lab2.router";
import lab3CommendInjection from "./labs/commandInjection/lab3/lab3.router";
import lab1inscureDeserialization from "./labs/insecureDeserialization/lab1/lab1.router";
import lab2inscureDeserialization from "./labs/insecureDeserialization/lab2/lab2.router";
import lab1CSRF from "./labs/CSRF/lab1/lab1.router";
import lab2CSRF from "./labs/CSRF/lab2/lab2.router";
import lab3CSRF from "./labs/CSRF/lab3/lab3.router";
import lab1fileInclusion from "./labs/fileInclusion/lab1/lab1.router";
import lab2fileInclusion from "./labs/fileInclusion/lab2/lab2.router";
import lab3fileInclusion from "./labs/fileInclusion/lab3/lab3.router";
import BurPSuiteLab3 from "./labs/burpsuite/lab3/lab3.router";
import clickJackLab1 from "./labs/ClickJacking/lab1/lab1.router";
import lab1RaceCondition from "./labs/raceCondition/lab1/lab1.router";
import lab2RaceCondition from "./labs/raceCondition/lab2/lab2.router";
import lab1capatcha from "./labs/capatchaBypass/lab1/lab1.router";
import lab2capatcha from "./labs/capatchaBypass/lab2/lab2.router";
import lab3capatcha from "./labs/capatchaBypass/lab3/lab3.router";
import lab1SSTI from "./labs/SSTI/lab1/lab1.router";
import lab2SSTI from "./labs/SSTI/lab2/lab2.router";
import bLVulnRouter from "./labs/BL-Vuln/Lab1/lab1.router";
import lab1jwtRouter from "./labs/jwt/lab1/lab1.router";
import lab2jwtRouter from "./labs/jwt/lab2/lab2.router";
import lab3jwtRouter from "./labs/jwt/lab3/lab3.router";
import lab1SSRF from "./labs/SSRF/lab1/lab1.router";
import lab2SSRF from "./labs/SSRF/lab2/lab2.router";

const app = express();
app.use("/uploads", express.static("uploads"));

app.use(
  cors({
    credentials: true, // Required for cookies
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.disable("etag");
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "../views"));

app.use("/api", registerRouter);
app.use("/api", loginRouter);
app.use("/api", dashboardRouter);
app.use("/api", logoutRouter);
app.use("/api", lab1);
app.use("/api", lab2);
app.use("/api", hiddenData);
app.use("/api", lab2xss);
app.use("/api", lab2sql);
app.use("/api", lab3sql);
app.use("/api", lab1UnrestrictedFile);
app.use("/api", lab2UnrestrictedFile);
app.use("/api", lab3UnrestrictedFile);
app.use("/api", lab1IDORSRouter);
app.use("/api", lab2IDORSRouter);
app.use("/api", lab3IDORSRouter);
app.use("/api", userRouter);
app.use("/api", lab1BrokenAuthRouter);
app.use("/api", lab2BrokenAuthRouter);
app.use("/api", lab3BrokenAuthRouter);
app.use("/api", lab2apiHacking);
app.use("/api", lab1PathTraversalRouter);
app.use("/api", lab1CommendInjection);
app.use("/api", lab2CommendInjection);
app.use("/api", lab3CommendInjection);
app.use("/api", lab1inscureDeserialization);
app.use("/api", lab2inscureDeserialization);
app.use("/api", lab1CSRF);
app.use("/api", lab2CSRF);
app.use("/api", lab3CSRF);
app.use("/api", lab1fileInclusion);
app.use("/api", lab2fileInclusion);
app.use("/api", lab3fileInclusion);
app.use("/api", BurPSuiteLab3);
app.use("/api", clickJackLab1);
app.use("/api", lab1RaceCondition);
app.use("/api", lab2RaceCondition);
app.use("/api", lab1capatcha);
app.use("/api", lab2capatcha);
app.use("/api", lab3capatcha);
app.use("/api", lab1SSTI);
app.use("/api", lab2SSTI);
app.use("/api", bLVulnRouter);
app.use("/api", lab1jwtRouter);
app.use("/api", lab2jwtRouter);
app.use("/api", lab3jwtRouter);
app.use("/api", lab1SSRF);
app.use("/api", lab2SSRF);

dotenv.config();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`hello on http://localhost:${PORT}`);
});