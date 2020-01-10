import React, { Component } from 'react';
import MovieCreator from './Movies'


export const MovieList  = ({ movieState }) => {
    const renderResults = () => {
        let movies;
        if (movieState) {
            movies = <MovieCreator movieState={movieState} />
        }

        return movies
    }
    
    return (
       <div>{this.renderResults()}</div>
    )
};

export default MovieList