import React, { Component } from 'react';
import MovieCreator from './Movies'

const Search = ({ value, onChange, movieState }) => {
    return(
        <div className="movies">

            <input className="search"
                value={value}
                onChange={onChange}
                placeholder="Search"
            />
         
            {movieState ? <MovieCreator movieState={movieState} /> : null}

        </div>
    )
}

export default Search;