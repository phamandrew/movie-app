import React, { Component } from 'react';
import './App.scss';
import { search } from './utils';
import MovieCreator from './Movies';

// export const moviedb_api_key = process.env.REACT_APP_MOVIEDB_API_KEY;
export const moviedb_api_key = 'dbc0a6d62448554c27b6167ef7dabb1b';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            loading: false,
            value: ''
        }
    }
   
    handleChange = async e => {
        this.setState({value: e.target.value});
        this.searchRequest(e.target.value);
    }
    
    searchRequest = async val =>  {
        this.setState({
            loading: true
        })

        const res = await search(`https://api.themoviedb.org/3/search/movie?query=${val}&api_key=${moviedb_api_key}`)

        this.setState({ 
            movies: res,
            loading: false 
        });
    }

    render() {
        return (
            <div className="movies">

            <input className="search"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Search"
            />
         
            {this.state.movies ? <MovieCreator movieState={this.state.movies} /> : null}

        </div>
           
        )
    }
}

export default Search;
