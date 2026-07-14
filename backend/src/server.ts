import dns from "dns";

dns.setServers([
  "8.8.8.8",
  "1.1.1.1"
]);


import express, { Request, Response, NextFunction } from "express";
import corsMiddleware from "./middlewares/cors";
import { connectDB } from "./config/Db";
import limiter from "./middlewares/rateLimiter";
import dotenv from "dotenv";
dotenv.config();
import "dotenv/config";
import securityMiddleware from "./middlewares/security";
import logger from "./middlewares/logger";
import session from "express-session";
import cookieParser from "cookie-parser";
import "./config/passport";
import passport from "passport";
import path from "path";
import apiRouter from "./apis/apiRouter";
import designRouter from "./routes/DesignRoute";

const app = express();
const port = process.env.PORT || 5000;

app.use(corsMiddleware);
app.options("*", corsMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`Request: ${req.method} ${req.url}`);
  next();
});

app.use(securityMiddleware);

connectDB();

app.use("/images", express.static(path.join(__dirname, "../uploads")));

app.use("/api/design", designRouter);

// Rate Limiter
app.use(limiter);
app.use('/api', apiRouter);

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "Endpoint not found" });
});

// GLOBAL ERROR HANDLER 
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err.stack);

  if (res.headersSent) {
    return next(err);
  }

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    error: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });