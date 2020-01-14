import React, { Component } from 'react';
import './App.scss';
// import Homepage from './Homepage';
import Movie from './Movie';
import { 
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink

} from 'react-router-dom';

import { search } from './utils';
import MovieCreator from './Movies';
import MovieList from './Movies';
import { Link } from 'react-router-dom';
// import MovieList from './MovieList';
import Search from './Search';
import Collections from './Collections';


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
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">Search</NavLink>
                            </li>
                            <li>
                                <NavLink to="/now-playing">Now Playing</NavLink>
                            </li>
                            <li>
                                <NavLink to="/top-rated">Top Rated</NavLink>
                            </li>
                            <li>
                                <NavLink to="/popular">Popular</NavLink>
                            </li>
                            <li>
                                <NavLink to="/upcoming">Upcoming</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/"  render={() => <Search movieState={this.state.movies} onChange={this.handleChange} />} />
                        <Route exact path="/movie/:movie_id" component={Movie} />

                        <Route exact path="/now-playing"  render={() => <Collections collection={"now_playing"}  />} />

                        <Route exact path="/top-rated"  render={() => <Collections collection={"top_rated"}  />} />

                        <Route exact path="/popular"  render={() => <Collections collection={"popular"}  />} />

                        <Route exact path="/upcoming"  render={() => <Collections collection={"upcoming"}  />} />

                    </Switch>

                </div>
                

            </Router>
        )
    }
}


export default App;
