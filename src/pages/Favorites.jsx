import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContexts"


const Favorites = () => {
  const {favorites} = useMovieContext()

  if (favorites.length === 0) {
    return <p>No favorite movies found.</p>;
  }

  return (
    <div>
      <p className="text-center text-lg my-5 font-bold">Your Favorites</p>
      <div className="grid gap-3 xs:grid-cols-2 lg:grid-cols-3">
      {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
      ))}
      </div>
    </div>
   
  )
}

export default Favorites
