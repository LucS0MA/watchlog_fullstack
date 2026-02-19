import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { MovieData } from "../types/Movie.types";
import Loader from "../components/Loader";

const SingleMovie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<MovieData | undefined>()

    const getMovie = async () => {
    try {
      const response = await axios.get<MovieData>(`http://localhost:3000/movies/${id}`);
      setMovie(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);


  if (!movie) {
    return (
        <Loader/>
    )
  }
  return (
    
    <div className="min-h-screen bg-black text-white relative">

      <div className="absolute inset-0 overflow-hidden">
        <img
          src={movie.posterurl}
          alt=""
          className="w-full h-full object-cover scale-110 blur-2xl opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start justify-center px-8 py-16 max-w-5xl mx-auto">

        <div className="w-64 shrink-0 aspect-[2/3] overflow-hidden shadow-2xl">
          <img
            src={movie.posterurl}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6 pt-4">

          <div>
            <h1 className="font-heading text-4xl md:text-5xl leading-tight">
              {movie.title}
            </h1>
            <span className="text-white/50 text-lg mt-1 block">{movie.year}</span>
          </div>

          <div className="border-t border-white/20 w-24" />

          <div className="flex flex-col gap-1">
            <span className="text-white/40 text-xs uppercase tracking-widest">Réalisateur</span>
            <span className="text-white text-lg">{movie.director}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-white/40 text-xs uppercase tracking-widest">Casting</span>
            <p className="text-white/80 text-base leading-relaxed">{movie.casting}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SingleMovie;