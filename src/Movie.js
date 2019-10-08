import React, { Component } from 'react';
import Axios from 'axios';
import moviedb_api_key from './Homepage'

// const moviedb_api_key = process.env.REACT_APP_MOVIEDB_API_KEY;

class Movie extends Component {
    constructor() {
        super();
        this.state = {
            movie: {}
        }
    }
    componentDidMount() {
        Axios({
            url: `https://api.themoviedb.org/3/movie/${this.props.match.params.movie_id}`,
            method: 'GET',
            params: {
                api_key: moviedb_api_key
            }
        })
        .then((res) => {
            this.setState ({
                movie: res.data
            })
        })
    }
    render() {
        return (
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`}/>
                <h1>{this.state.movie.original_title}</h1>
                <p>{this.state.movie.overview}</p>
            </div>
        )
    }
}

export default Movie;