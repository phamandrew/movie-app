import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage';
import Movie from './Movie';
import { 
    BrowserRouter as Router,
    Route,
    Switch

} from 'react-router-dom';

import { search } from './utils';
import MovieCreator, { MovieRender } from './Movies';
import { Link } from 'react-router-dom';
import MovieList from './MovieList';
import MovieSort from './Movies';
import Search from './Search';

// export const moviedb_api_key = process.env.REACT_APP_MOVIEDB_API_KEY;
export const moviedb_api_key = 'dbc0a6d62448554c27b6167ef7dabb1b';


class App extends Component {
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
        console.log("CHANGING");
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
        // const renderResults = this.renderResults();
        return (
            <Router>
                <div className="app">
                    <Switch>
                        <Route exact path="/search"  render={() => <Search movieState={this.state.movies} onChange={this.handleChange} />} />
                        <Route exact path="/movie/:movie_id" component={Movie} />
                    </Switch>

                    {/* <Search movieState={this.state.movies} onChange={this.handleChange} /> */}
{/* 
                    <div className="movie-list">
                        {this.state.movies ? <MovieCreator movieState={this.state.movies} /> : null}
                    </div> */}
                    {/* <Route exact path="/movie/" component={MovieList} /> */}
                    {/* <MovieList movieState={this.state.movies} /> */}
                    {/* <MovieCreator movieState={this.state.movies} /> */}
                    {/* {this.renderResults()} */}
                    
                    

                </div>
                

            </Router>
        )
    }
}


export default App;
