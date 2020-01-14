
import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { moviedb_api_key } from './App';


class Collections extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }
    componentDidMount() {
        Axios({
            url: `https://api.themoviedb.org/3/movie/${this.props.collection}`,
            method: 'GET',
            params: {
                api_key: moviedb_api_key
            }
        })
        .then((res) => {
            this.setState({
                movies: res.data.results
            });
        });
    }
    componentDidUpdate(prevProps) {
        if (this.props.collection !== prevProps.collection) {
            Axios({
                url: `https://api.themoviedb.org/3/movie/${this.props.collection}`,
                method: 'GET',
                params: {
                    api_key: moviedb_api_key
                }
            })
            .then((res) => {
                this.setState({
                    movies: res.data.results
                });
            });

        }
    }
    renderHeader(){
        if (this.props.collection === "now_playing") {
            return "Now Playing";
        } else if (this.props.collection === "new_releases") {
            return "New Releases";
        } else if (this.props.collection === "top_rated") {
            return "Top Rated";
        } else if (this.props.collection === "popular") {
            return "Popular";
        } else if (this.props.collection === "upcoming") {
            return "Upcoming";
        }
    }
    render() {
        return (
            <section className="movies">
                <h1>{this.renderHeader()}</h1>
                <div className="movie-container">
                    {this.state.movies.map((movie) => {
                        return (
                            // <div className="movie" key={movie.id}>
                            <Link to={`/movie/${movie.id}`} className="movie" key={movie.id}>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                                <h3>{movie.original_title}</h3>
                            </Link>
                            // </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default Collections;
