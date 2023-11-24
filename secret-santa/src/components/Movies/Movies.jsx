import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Movies.css"
const apiKey = "8a6783e6b16c1b77912e3674300721a8"

function Movies() {
  const [moviesList, setMoviesList] = useState([]);

  const getMovie = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query= Noël`)
      .then((res) => res.json())
      .then((json) => setMoviesList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(moviesList);
  


  return (
    <><h1>The Best Chrismas Movies</h1><div className="Movies-container">
      {moviesList.map((movie) => (
        <div key={movie.id} className="container-movie">
          <img
            className="movie-img"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title} />
          <div className="movie-info">
            <div className="Box">
              <h1 className="title-movie">{movie.title}</h1>
              <h2 className="date-movie">Date: {movie.release_date}</h2>
              <h2 className="Language-movie">Language: {movie.original_language}</h2>

              <h6 className="rating-movie">{movie.vote_average}</h6>
            </div>
            <div className="overview">
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
          <div>
            <div>
              <a
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                  `${movie.title} trailer`
                )}&type=video&order=relevance`}
                target="_blank"
                rel="noopener noreferrer"
                className="play-trailer-button"
              >
                Watch Trailer
              </a>
            </div>
          </div>
        </div>
      ))}
    </div></>
  );
}

export default Movies;
