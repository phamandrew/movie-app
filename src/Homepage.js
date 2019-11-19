import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { moviedb_api_key } from './App';
import { search } from './utils';
import { MovieCreator } from './Movies';

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
        this.renderResults = this.renderResults.bind(this)
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

    renderResults = () => {
        let movies = <h1>No Movies : (</h1>;
        if (this.state.movies) {
            console.log("RENDER RESULTS");
            // movies = <MovieRender movieState={this.state.movies} />
        }

        return movies;
    }

        

    render() {
        return (
            <section className="movie-container">
                
                    <input
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Type something to search"
                    />


                
                {/* {this.state.movies.map((movie) => {
                    return (
                        <div className="movie" key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                <h3>{movie.original_title}</h3>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                            </Link>
                        </div>
                    )
                })}  */}
                {
                    if (this.state.movies.length > 0) {
                        <MovieCreator movieState={this.state.movies} />
                    }
                }

            </section>
        )
    }
}

export default Homepage;

