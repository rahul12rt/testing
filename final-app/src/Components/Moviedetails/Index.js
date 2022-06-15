import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Index";
import "./Moviedetails.css";
import Videos from "../Video/Index";
import { Link } from "react-router-dom";

const url = "https://api.themoviedb.org/3";

function Moviedetails() {
  const [moviess, setMoviess] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchmovie() {
      const request = await axios.get(
        `${url}/movie/${id}?api_key=8612aaeb857886e801ddfca868da9cf3&language=en-US`
      );
      setMoviess(request.data);
      console.log(request.data);
      return request;
    }
    fetchmovie();
  }, []);

  return (
    <>
      {/* <h1>rahul</h1> */}
      <div className="navbar">
        <Navbar />
      </div>

      <div className="movie-data">
        <div className="movie-content">
          <div className="movie-background">
            <img
              src={`https://image.tmdb.org/t/p/original/${moviess.poster_path}`}
              className="movie-image"
              alt={moviess.name}
            />
          </div>
          <div className="movie-description">
            <h3 className="tagline">{moviess.tagline}</h3>
            <h1 className="movie-title">{moviess.original_title}</h1>
            <p className="movie-overview">{moviess.overview}</p>
            <div className="movie-details">
              <h4>Popularity - {moviess.popularity}</h4>
              <h4>Voting - {moviess.vote_average}</h4>
              <h4>Release Date - {moviess.release_date}</h4>
              <h4>Revenue - {moviess.revenue}</h4>
            </div>
            <Link to="/Home">
              <button className="Movie-deatailes-button">Back</button>
            </Link>
          </div>
        </div>
      </div>
      <Videos />
    </>
  );
}

export default Moviedetails;
