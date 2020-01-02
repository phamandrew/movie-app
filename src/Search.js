import React, { Component } from 'react';
import MovieCreator from './Movies'

export const Search = ({ value, onChange, movieState }) => {
    return(
        <div className="search">

            <input className="search"
                value={value}
                onChange={onChange}
                placeholder="Type something to search"
            />
            <div className="movie-list">
                {movieState ? <MovieCreator movieState={movieState} /> : null}
            </div>
        </div>
    )
}

export default Search;