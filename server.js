import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";

// CUSTOM MODULES
// routers
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";

// middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// ALL ROUTES AND CONTROLLERS IN HERE:
app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/auth", authRouter);
app.use(errorHandlerMiddleware);
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
});

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected");
  app.listen(5100, () => {
    console.log(`Server listening on port ${port}!`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
