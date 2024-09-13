import React from "react";
import "./Banner.css";
import instance from "../src/axios";
import requests from "./request";
import { useState, useEffect } from "react";


function Banner() {
  const [movie, setMovie] = useState([]);
  // const url = "https://api.themoviedb.org/3/discover/tv?api_key=42f1a5907bea56b6461418ef4af98bfa&with_networks=213"
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      // console.log(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "...": str;
  }
  return (

    <header
      className="banner"
      style={{
        backgroundSize: "cover",        
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",  
      
        
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
