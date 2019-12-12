import React, { Component } from 'react';

export const Search = ({ value, onChange }) => {
    return(
        <input className="search"
            value={value}
            onChange={onChange}
            placeholder="Type something to search"
        />
    )
}

export default Search;