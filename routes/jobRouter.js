import { Router } from "express";
const router = Router();
import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  // showStats,
} from "../controllers/jobController.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
// import { checkForTestUser } from "../middleware/authMiddleware.js";

// router.get('/',getAllJobs)
// router.post('/',createJob)

router
  .route("/")
  .get(getAllJobs)
  .post(validateJobInput, createJob);

// router.route("/stats").get(showStats);

router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(validateJobInput, validateIdParam, updateJob)
  .delete(validateIdParam, deleteJob);

export default router;
