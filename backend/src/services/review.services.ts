import { Review } from "../models/review.models.js";
import { ReviewRow } from "../types/review.types.js";
import { pool } from "../config/database.js";

export const reviewService = {
  createReview: async (reviewData: Review): Promise<ReviewRow> => {
    const newReview = await pool.query<ReviewRow>(
      "INSERT INTO reviews (rating, comment, movie_id, user_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        reviewData.rating,
        reviewData.comment,
        reviewData.movie_id,
        reviewData.user_id,
      ],
    );
    return newReview.rows[0];
  },
  deleteReview: async (id: string): Promise<null | ReviewRow> => {
    const reviewToDelete = await pool.query<ReviewRow>(
      "DELETE FROM reviews WHERE id = $1 RETURNING *",
      [id],
    );
    return reviewToDelete.rows[0];
  },
  getAllReviews: async (): Promise<ReviewRow[]> => {
    const { rows } = await pool.query<ReviewRow>("SELECT * FROM reviews");
    return rows;
  },
  getReviewById: async (id: string): Promise<null | ReviewRow> => {
    const review = await pool.query<ReviewRow>(
      "SELECT * FROM reviews WHERE id = $1",
      [id],
    );
    return review.rows[0] ?? null;
  },
  updateReview: async (
    id: string,
    updateReviewData: Partial<Review>,
  ): Promise<null | ReviewRow> => {
    const reviewUpdated = await pool.query<ReviewRow>(
      "UPDATE REVIEWS SET rating = COALESCE($1, rating), comment = COALESCE($2, comment), movie_id = COALESCE($3, movie_id), user_id = COALESCE($4, user_id) WHERE id = $5 RETURNING *",
      [
        updateReviewData.rating,
        updateReviewData.comment,
        updateReviewData.movie_id,
        updateReviewData.user_id,
        id,
      ],
    );
    return reviewUpdated.rows[0] ?? null;
  },
};
