import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage';
import Movie from './Movie';
import { 
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

export const moviedb_api_key = process.env.REACT_APP_MOVIEDB_API_KEY;


class App extends Component {
    render() {
        return (
            <Router>

                <div className="App">
                    <header className="App-header">
                        <h1>Movies!</h1>
                    </header> 
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/movie/:movie_id" component={Movie} />
                </div>
            </Router>
        );
    }
}


export default App;
