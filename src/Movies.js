import React from 'react';
import { Link } from 'react-router-dom';


export const MovieCreator  = ({ movieState }) => {

    const movieList = movieState.map((movie) => 
            <Link to={`${process.env.PUBLIC_URL}/movie/${movie.id}`} className="movie" key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                <h3>{movie.original_title}</h3>
            </Link>
    );
    return (
        <section className="movie-container">{movieList}</section>
    ) 
};


export default MovieCreator;