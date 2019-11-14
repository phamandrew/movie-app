import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { moviedb_api_key } from './App';
import { search } from './utils';

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

         
        // const res = await Axios({
        //     url: 'https://api.themoviedb.org/3/search/movie',
        //     method: 'GET',
        //     params: {
        //         api_key: moviedb_api_key,
        //         query: val
        //     }
        // });

        const res = await search(`https://api.themoviedb.org/3/search/movie?query=${val}&api_key=${moviedb_api_key}`)

        
        // .then((res) => {
        //     this.setState({
        //         movies: res.data.results,
        //         loading: false
        //     });
        // });


        this.setState({ 
            movies: res,
            loading: false 
        });
    }

        

    render() {
        return (
            <section className="movie-container">
                
                    <input
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Type something to search"
                    />


                
                {/* {this.state.movies.list((movie) => {
                    return (
                        <div className="movie" key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                <h3>{movie.original_title}</h3>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                            </Link>
                        </div>
                    )
                })}  */}
            </section>
        )
    }
}

export default Homepage;

