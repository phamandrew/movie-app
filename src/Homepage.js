import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { moviedb_api_key } from './App';
import { search } from './utils';
import MovieCreator, { MovieRender } from './Movies';

class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            loading: false,
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.searchRequest = this.searchRequest.bind(this)

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

    get renderResults () {
        let movies;
        if (this.state.movies) {
            movies = <MovieCreator movieState={this.state.movies} />
        }
        //
        return movies
    }

        

    render() {
        return (
            <section className="movie-container">
                
                    <input
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Type something to search"
                    />


                {this.renderResults}

            </section>
        )
    }
}

export default Homepage;

