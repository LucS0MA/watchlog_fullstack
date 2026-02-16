import {
  createReview,
  deleteReview,
  getAllReviews,
  getReviewByid,
  updateReview,
} from "../controllers/review.controllers.js";
import { Router } from "express";

export const reviewRouter = Router();

reviewRouter.get("/", getAllReviews);
reviewRouter.get("/:id", getReviewByid);
reviewRouter.delete("/:id", deleteReview);
reviewRouter.post("/", createReview);
reviewRouter.put("/:id", updateReview);
