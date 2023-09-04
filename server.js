import express from "express";
const app = express();
import morgan from "morgan";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

// CUSTOM MODULES
import jobRouter from "./routes/jobRouter.js";

dotenv.config();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
});

// ALL ROUTES AND CONTROLLERS IN HERE:
app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "something went wrong" });
});

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URI);
  // , {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });
  console.log("MongoDB connected");
  app.listen(5100, () => {
    console.log(`Server listening on port ${port}!`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
