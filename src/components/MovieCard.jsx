import { Heart } from "lucide-react";
import { useMovieContext } from "../contexts/MovieContexts";

const MovieCard = ({ movie }) => {
  const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
  const favorite = isFavorite(movie.id)
  
  const onFavoriteClick = () => {
    if(favorite) removeFromFavorites(movie.id)
    else addToFavorites(movie)
  };

  return (
    <div className="relative">
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className=" h-[400px] w-full border-2"/>
        <Heart
          onClick={onFavoriteClick}
          className={`cursor-pointer rounded-xl py-[2px] absolute top-2 right-3 ${favorite ? 'bg-red-400' : ''}`}
        />
      </div>
      <div>
        <p className="font-bold">{movie.title}</p>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
