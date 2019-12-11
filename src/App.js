import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage';
import Movie from './Movie';
import { 
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import { search } from './utils';
import MovieCreator, { MovieRender } from './Movies';
import { Link } from 'react-router-dom';
import MovieList from './MovieList';
import MovieSort from './Movies';

// export const moviedb_api_key = process.env.REACT_APP_MOVIEDB_API_KEY;
export const moviedb_api_key = 'dbc0a6d62448554c27b6167ef7dabb1b';


// class App extends Component {
//     render() {
//         return (
//             <Router>

//                 <div className="App">
//                     <header className="App-header">
//                         <h1>Movies!</h1>
//                     </header> 
//                     <Route exact path="/" component={Homepage} />
//                     <Route exact path="/movie/:movie_id" component={Movie} />
//                 </div>
//             </Router>
//         );
//     }
// }

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

    renderResults = () => {
        let movies;
        if (this.state.movies) {
            movies = <MovieSort movieState={this.state.movies} />
        }
        //
        return movies
    }

    render() {
        // const renderResults = this.renderResults();
        return (
            <Router>
                <div className="app">
                    <input
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Type something to search"
                    />

                    {/* {renderResults} */}
                    {/* {this.state.movies ? <MovieCreator movieState={this.state.movies} /> : <h1>No Results</h1>} */}
                    <Route exact path="/movie/:movie_id" component={Movie} />
                    {/* <Route exact path="/movie/" component={MovieList} /> */}
                    {/* <MovieList movieState={this.state.movies} /> */}
                    {/* <MovieCreator movieState={this.state.movies} /> */}
                    {this.renderResults()}
                    
                    

                </div>
                

            </Router>
        )
    }
}


export default App;
