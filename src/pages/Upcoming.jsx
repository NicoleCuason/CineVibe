import { useState, useEffect } from "react";
import { getUpcomingMovies } from "../services/api"; 
import MovieCard from "../components/MovieCard";
import "../css/Upcoming.css";  

function Upcoming() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUpcomingMovies = async () => {
      try {
        const upcomingMovies = await getUpcomingMovies();
        setMovies(upcomingMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load upcoming movies.");
      } finally {
        setLoading(false);
      }
    };

    loadUpcomingMovies();
  }, []);

  return (
    <div className="upcoming">
      <h2>Upcoming Movies</h2>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Upcoming;
