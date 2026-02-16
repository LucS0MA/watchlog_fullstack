import { Router } from "express";

import {
  createMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
} from "../controllers/movie.controllers.js";

export const movieRouter = Router();

movieRouter.get("/", getAllMovies);
movieRouter.get("/:id", getMovieById);
movieRouter.delete("/:id", deleteMovie);
movieRouter.post("/", createMovie);
movieRouter.put("/:id", updateMovie);
