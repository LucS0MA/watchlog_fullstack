import type { MovieData } from "../types/Movie.types"

const MovieCard = (movieData: MovieData) => {
    return (
        <div>
            <img src={movieData.posterurl} alt={movieData.title} />
        </div>
    )
}

export default MovieCard