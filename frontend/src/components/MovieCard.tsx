import type { MovieData } from "../types/Movie.types";

const MovieCard = (movieData: MovieData) => {
  return (
    <div className="group aspect-[2/3] m-4 relative flex flex-col items-center hover:scale-105  duration-500 cursor-pointer">
        <div className="inset-0 absolute opacity-0 bg-gradient-to-t from-black via-black/80 via-40% to-transparent group-hover:opacity-100 transition-opacity duration-500 hover:scale-105"></div>
        <img
          className="h-full w-full transition-transform"
          src={movieData.posterurl}
          alt={movieData.title}
        />
        <p className="text-center text-lit-title py-8 w-full font-heading size-3 text-white z-20 opacity-0 group-hover:opacity-100 transition duration-750 absolute -bottom-0.5 bg-gradient-to-t from-black via-black/80 via-40% to-transparent">
          {movieData.title}
        </p>
      </div>
  );
};

export default MovieCard;
