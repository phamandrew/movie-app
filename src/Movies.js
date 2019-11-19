import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export const MovieCreator  = ({ movieState }) => {

    const movieList = movieState.map((movie) => 
         <div className="movie" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
                <h3>{movie.original_title}</h3>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
            </Link>
        </div>
    );
    return (
        <div>{movieList}</div>
    )
   
};


export default MovieCreator;