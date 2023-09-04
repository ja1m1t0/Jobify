import { Router } from "express";
const router = Router();
import {
  getAllJobs,
  createJob,
  getSingleJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";

// router.get("/", getAllJobs);
// router.post("/", createJob);

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(getSingleJob).patch(updateJob).delete(deleteJob);

export default router;