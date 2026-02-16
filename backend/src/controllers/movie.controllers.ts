import { Request, Response } from "express";

import { Movie } from "../models/movie.models.js";
import { MovieService } from "../services/movie.services.js";

export const getAllMovies = async (_req: Request, res: Response) => {
  try {
    const movies = await MovieService.getAll();
    res.status(200).json(movies);
  } catch (err) {
    console.error("Error trying to retrieve all the movies", err);
    res.status(500).json({
      error: "Failed to retrieve movies",
      message: err instanceof Error ? err.message : "unknow error",
    });
  }
};

export const getMovieById = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const movie = await MovieService.getMovieById(id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.status(200).json(movie);
  } catch (err) {
    console.error("Error trying to find the movie", err);
    res.status(500).json({
      error: "Failed to retrieve the movie",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const result = await MovieService.deleteMovie(id);
    if (!result) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.status(200).json("Movie deleted");
  } catch (err) {
    console.error("Failed to delete the movie");
    res.status(500).json({
      error: "Error trying to delete the movie",
      message: err instanceof Error ? err.message : "unkown error",
    });
  }
};

export const createMovie = async (req: Request, res: Response) => {
  try {
    const movieData = req.body as Movie;
    const createdMovie = await MovieService.createMovie(movieData);
    console.log(createMovie);
    res.status(201).json(createdMovie);
  } catch (err) {
    console.error("Failed to create the movie");
    res.status(500).json({
      error: "Error trying to create a movie",
      message: err instanceof Error ? err.message : "unkown error",
    });
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const movieData = req.body as Partial<Movie>;
    const updatedMovie = await MovieService.updateMovie(movieData, id);
    res.send(200).json(updatedMovie);
  } catch (err) {
    console.error("Failed to update a movie");
    res.status(500).json({
      error: "Error trying to update the movie",
      message: err instanceof Error ? err.message : "unkown error",
    });
  }
};
