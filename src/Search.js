import React, { Component } from 'react';
import MovieCreator from './Movies'

const Search = ({ value, onChange, movieState }) => {
    return(
        <div className="search">

            <input className="search"
                value={value}
                onChange={onChange}
                placeholder="Type something to search"
            />
         
            {movieState ? <MovieCreator movieState={movieState} /> : null}
            
        </div>
    )
}

export default Search;