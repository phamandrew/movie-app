import React, { Component } from 'react';
import Axios from 'axios';
import { moviedb_api_key } from './App';


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
            <div className="movie-id">
                {/* <a onClick={history.back()}>Back</a> */}
                <img src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`}/>
                <h1>{this.state.movie.original_title}</h1>
                <h2>{this.state.movie.tagline}</h2>
                {/* <h2>{this.state.movie.release_date}</h2> */}
                <h3>Avg Rating: {this.state.movie.vote_average}</h3>
                <p>{this.state.movie.overview}</p>
            </div>
        )
    }
}

export default Movie;