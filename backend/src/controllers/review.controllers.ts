import { Review } from "../models/review.models.js";
import { reviewService } from "../services/review.services.js";
import { Request, Response } from "express";

export const getAllReviews = async (_req: Request, res: Response) => {
  try {
    const reviews = await reviewService.getAllReviews();
    res.status(200).json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to retrieve the reviews",
      message: err instanceof Error ? err.message : "unkown error",
    });
  }
};

export const getReviewByid = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    if (!id) {
      return res.status(400).json({ message: "Invalid id" });
    }
    const review = await reviewService.getReviewById(id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json(review);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to retrieve the review",
      message: err instanceof Error ? err.message : "unkown error",
    });
  }
};

export const deleteReview = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    if (!id) {
      return res.status(400).json({ message: "Invalid id" });
    }
    const reviewDeleted = await reviewService.deleteReview(id);
    if (!reviewDeleted) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ message: "Review deleted", reviewDeleted });
  } catch (err) {
    res.status(500).json({
      error: "Failed to delete the review",
      message: err instanceof Error ? err.message : "unkown error",
    });
  }
};

export const createReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body as Review;
    const newReview = await reviewService.createReview(reviewData);
    res.status(200).json({ message: "Review created", newReview });
  } catch (err) {
    res.status(500).json({
      error: "Failed to create the review",
      message: err instanceof Error ? err.message : "unkown error",
    });
  }
};

export const updateReview = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    if (!id) {
      return res.status(400).json({ message: "Invalid id" });
    }
    const reviewData = req.body as Partial<Review>;
    const reviewUpdated = await reviewService.updateReview(id, reviewData);
    if (!reviewUpdated) {
      res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ message: "Review updated !", reviewUpdated });
  } catch (err) {
    res.status(500).json({
      error: "Failed to update the review",
      message: err instanceof Error ? err.message : "unkown error",
    });
  }
};
