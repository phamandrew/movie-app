import React, { Component } from 'react';
import './App.scss';
import Movie from './Movie';
import { 
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';

import Hamburger from 'react-hamburgers'
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
        this.state = { active: false };
    }

    activeFalse () {
        this.setState({ active: false })
    }
    
    render() {
        return (
            <Router>
                <div className="app">
                    <nav>
                        <NavLink exact to={`${process.env.PUBLIC_URL}/`} className="logo">CINÉSEARCH<img src={SearchIcon} alt="Search Icon"/></NavLink>
                        <Hamburger 
                            active={this.state.active}
                            type="slider"
                            onClick={() => this.setState({ active: !this.state.active })}
                        />
                        <ul className={this.state.active ? 'active' : null}>
                            <li>
                                <NavLink exact to={`${process.env.PUBLIC_URL}/`} onClick={() => this.activeFalse()}>Search<img src={SearchIcon} alt="Search Icon"/></NavLink>
                            </li>
                            <li>
                                <NavLink to={`${process.env.PUBLIC_URL}/now-playing`} onClick={() => this.activeFalse()}>Now Playing</NavLink>
                            </li>
                            <li>
                                <NavLink to={`${process.env.PUBLIC_URL}/top-rated`} onClick={() => this.activeFalse()}>Top Rated</NavLink>
                            </li>
                            <li>
                                <NavLink to={`${process.env.PUBLIC_URL}/popular`} onClick={() => this.activeFalse()}>Popular</NavLink>
                            </li>
                            <li>
                                <NavLink to={`${process.env.PUBLIC_URL}/upcoming`} onClick={() => this.activeFalse()}>Upcoming</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Search} />

                        <Route exact path={`${process.env.PUBLIC_URL}/movie/:movie_id`} component={Movie} />

                        <Route exact path={`${process.env.PUBLIC_URL}/now-playing`}  render={() => <Collections collection={"now_playing"}  />} />

                        <Route exact path={`${process.env.PUBLIC_URL}/top-rated`}  render={() => <Collections collection={"top_rated"}  />} />

                        <Route exact path={`${process.env.PUBLIC_URL}/popular`}  render={() => <Collections collection={"popular"}  />} />

                        <Route exact path={`${process.env.PUBLIC_URL}/upcoming`}  render={() => <Collections collection={"upcoming"}  />} />

                    </Switch>

                </div>
            </Router>
        )
    }
}


export default App;
