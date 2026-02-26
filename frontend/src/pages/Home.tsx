import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import type { MovieData } from "../types/Movie.types";
import { useAuth } from "../hooks/useAuth";
import { Loader } from "lucide-react";

const Home = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const { status } = useAuth();

  const getMovies = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/movies`);
      setMovies(response.data.data ?? response.data ?? []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovies();
    console.log(import.meta.env.VITE_API_URL)
    console.log(status)
  }, []);

  if (movies.length === 0) {
        return (
            <Loader />
        )
    }

  return (
    <div className="watch-container">
      <div className="grid grid-cols-4 gap-4 mx-6">
        {movies.map((movie, id) => (
          <div key={id}>
            <MovieCard {...movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
