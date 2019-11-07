import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { search } from './utils'
import { moviedb_api_key } from './App';
import { Movies } from './Movies';

class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            value: ''
        }
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        // this.searchRequest = this.searchRequest.bind(this)
        this.renderMovies = this.renderMovies.bind(this)
        this.search = this.search.bind(this)
    }
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.setState ({
    //         value: ''
    //     })
    //     this.searchRequest();
    // };

    handleChange = (e) => {
        this.setState({value: e.target.value});
        this.search(e.target.value);
    }

    search = async val => {
        this.setState = ({ loading: true });

        const res = await search (
            `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=${moviedb_api_key}`
        );
        const movies = await res.results;
        // this.setState({ movies, loading: false });
        // const res = await search ({
        //     url: 'https://api.themoviedb.org/3/search/movie',
        //     method: 'GET',
        //     params: {
        //         api_key: moviedb_api_key,
        //         query:`${val}`
        //     }
        // });

    };


    
    // searchRequest() {
    //     Axios({
    //         url: 'https://api.themoviedb.org/3/search/movie',
    //         method: 'GET',
    //         params: {
    //             api_key: moviedb_api_key,
    //             query: this.state.value
    //         }
    //     })
    //     .then((res) => {
    //         this.setState({
    //             movies: res.data.results
    //         });
    //     });
    // }

    renderMovies() {
        this.state.movies.map((movie) => {
            return (
                <div className="movie" key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>
                        <h3>{movie.original_title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                    </Link>
                </div>
            )
        })


    }

    render() {
        return (
            <section className="movie-container">
                {/* <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Type something to search"
                    />
                    <input type="submit" value="Submit" />
                </form> */}

            <input
                value={this.state.value}
                onChange={e => this.handleChange(e)}
                placeholder="Type something to search"
            />

                {this.renderMovies}
            </section>
        )
    }
}





export default Homepage;

