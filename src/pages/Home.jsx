import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";


const Home = () => {
  const [inputField, setInputField] = useState("");
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies()
        if (popularMovies && Array.isArray(popularMovies)) {
          setMovies(popularMovies);
        } else {
          setError("Unexpected response format");
        }
      } catch (error) {
        console.log(error)
        setError('failed to load movies')
      } finally {
        setLoading(false)
      }
    }

    loadPopularMovies()
  }, [])

  const handleSubmit = async  (e) => {
    e.preventDefault()
    if(!inputField.trim()) return
    if(loading) return

    setLoading(true)

    try {
      const searchResults = await searchMovies(inputField)
      setMovies(searchResults);
    } catch (error) {
      console.log(error)
      setError('failed to search movies...')
    } finally {
      setLoading(false)
    }
  
    
    
    setInputField('')
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="text-center mb-5">
        <input
          type="text"
          placeholder="search for movies..."
          className="outline-none border-b-2 py-1 md:my-7"
          value={inputField}
          onChange={(e) => setInputField(e.target.value)}
        />
        <button type="submit" className="bg-blue-400 px-2 text-white font-bold py-1">
          search
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {Array.isArray(movies) && movies.length > 0 ? 
        <div className="grid gap-3 xs:grid-cols-2 lg:grid-cols-3">
          {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        :  !loading && <p>No movies found.</p>
      }
    </div>
  );
};
export default Home;
