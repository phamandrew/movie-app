import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { moviedb_api_key } from './App';

class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            value: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.searchRequest = this.searchRequest.bind(this)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState ({
            value: ''
        })
        this.searchRequest();
    };

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }
    
    searchRequest() {
        Axios({
            url: 'https://api.themoviedb.org/3/search/movie',
            method: 'GET',
            params: {
                api_key: moviedb_api_key,
                query: this.state.value
            }
        })
        .then((res) => {
            this.setState({
                movies: res.data.results
            });
        });
    }

        

    render() {
        return (
            <section className="movie-container">
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Type something to search"
                    />
                    <input type="submit" value="Submit" />
                </form>
                {this.state.movies.map((movie) => {
                    return (
                        <div className="movie" key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                <h3>{movie.original_title}</h3>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                            </Link>
                        </div>
                    )
                })}
            </section>
        )
    }
}

export default Homepage;

