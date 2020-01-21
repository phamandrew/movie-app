import React, { Component } from 'react';
import './App.scss';
import Movie from './Movie';
import { 
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';

import SearchIcon from './search-solid.svg'
// import { ReactComponent as SearchLogo } from './search-solid.svg';
// import SearchLogo from '../search-solid.svg';
import Search from './Search';
import Collections from './Collections';

// export const moviedb_api_key = process.env.REACT_APP_MOVIEDB_API_KEY;
export const moviedb_api_key = 'dbc0a6d62448554c27b6167ef7dabb1b';
//  console.log(SearchLogo);

class App extends Component {
    constructor() {
        super();
    }
   
    render() {
        return (
            <Router>
                <div className="app">
                    <nav>

                        <NavLink exact to="/" className="logo">CINÉSEARCH<img src={SearchIcon} alt="Search Icon"/></NavLink>

                        <ul>
                            <li>
                                <NavLink exact to="/">Search</NavLink>
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
                        <Route exact path="/" component={Search} />

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
