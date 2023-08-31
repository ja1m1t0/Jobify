import express from "express";
const app = express();
import morgan from "morgan";
import * as dotenv from "dotenv";
import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];

// console.log(jobs);

// fetch("https://www.course-api.com/react-useReducer-cart-project")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

dotenv.config();

if (!process.env.NODE_ENV === "development") {
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

app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs });
});

const port = process.env.PORT || 5100;

app.listen(5100, () => {
  console.log(`Server listening on port ${port}!`);
});
