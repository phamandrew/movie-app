import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const MovieCreator  = ({ movieState }) => {

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

// export const MovieSort = ({ movieState }) => {
   
//         let movies;
//         if (movieState) {
//             movies = <MovieCreator movieState={movieState} />
//         }
//         //
//         return movies

// };

// {movieState ? <MovieCreator movieState={movieState} /> : <h1>No Results</h1>}

export default MovieCreator;