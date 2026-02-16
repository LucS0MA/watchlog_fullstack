import { pool } from "../config/database.js";
import { Movie } from "../models/movie.models.js";
import { MovieRow } from "../types/movie.types.js";

export const MovieService = {
  createMovie: async (movie: Movie) => {
    const result = await pool.query<MovieRow>(
      "INSERT INTO movies (casting, director, posterurl, synopsis, title, year) VALUES ($1, $2, $3,$4 ,$5 ,$6) RETURNING *",
      [
        movie.casting,
        movie.director,
        movie.posterurl,
        movie.synopsis,
        movie.title,
        movie.year,
      ],
    );
    return result.rows[0];
  },
  deleteMovie: async (id: string): Promise<false | true> => {
    const result = await pool.query<MovieRow>(
      "DELETE FROM movies WHERE id = $1",
      [id],
    );
    if (result.rowCount === 0) {
      return false;
    }
    return true;
  },
  getAll: async (): Promise<MovieRow[]> => {
    const { rows } = await pool.query<MovieRow>("SELECT * FROM movies");
    return rows;
  },
  getMovieById: async (id: string): Promise<MovieRow | null> => {
    const { rows } = await pool.query<MovieRow>(
      "SELECT * FROM movies WHERE id = $1",
      [id],
    );

    return rows[0] ?? null;
  },
  updateMovie: async (movieData: Partial<Movie>, id: string) => {
    const result = await pool.query<MovieRow>(
      "UPDATE MOVIES SET title = COALESCE($1, title), synopsis = COALESCE($2, synopsis), director = COALESCE($3, director), year = COALESCE($4, year), casting = COALESCE($5, casting) WHERE id = $6  RETURNING *",
      [
        movieData.title,
        movieData.synopsis,
        movieData.director,
        movieData.year,
        movieData.casting,
        id,
      ],
    );
    return result.rows[0];
  },
};
