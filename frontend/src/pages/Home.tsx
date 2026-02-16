import axios from "axios"
import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import type { MovieData } from "../types/Movie.types"

const Home = () => {
    const [movies, setMovies] = useState<MovieData[]>([])

    const getMovies = async () => {
        try {
            const response = await axios.get('http://localhost:3000/movies')
            setMovies(response.data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getMovies();
    }, [])
    
    return (
        <div className="watch-container">
            <div className="grid grid-cols-4 gap-4 mx-6">
                {movies.map((movie, id) => (
                    <div key={id}>
                    <MovieCard {...movie}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home