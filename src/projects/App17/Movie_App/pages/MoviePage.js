import { useEffect, useState } from "react";

import MovieItem from "../components/MovieItem";
import { getMovies, getSearchMovies } from "../api/connect";

import "./index.css";

const MoviePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const result = await getMovies();
      setMovies(result);
    };

    getMovie();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await getSearchMovies(searchTerm);
    setMovies(result);
  };

  const renderedMovies = movies.map((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    return (
      <MovieItem
        key={title}
        title={title}
        poster_path={poster_path}
        vote_average={vote_average}
        overview={overview}
      />
    );
  });

  return (
    <>
      <header>
        <form onSubmit={handleSubmit} id="form">
          <input
            onChange={handleChange}
            type="text"
            className="search"
            id="search"
            placeholder="Search"
            value={searchTerm || ""}
          />
        </form>
      </header>

      <main id="main">{renderedMovies}</main>
    </>
  );
};

export default MoviePage;
