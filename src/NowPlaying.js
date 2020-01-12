// import React, { Component } from 'react';


// const NowPlaying = () => {
//     return(
//         <h1>Now Playing</h1>
//     )
// }

// export default NowPlaying;

import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';




const moviedb_api_key = process.env.REACT_APP_MOVIEDB_API_KEY;

class NowPlaying extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }
    componentDidMount() {
        Axios({
            url: 'https://api.themoviedb.org/3/movie/now_playing',
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
    render() {
        return (
            <section className="movie-container">
                {this.state.movies.map((movie) => {
                    return (
                        <div className="movie" key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                                <h3>{movie.original_title}</h3>
                            </Link>
                        </div>
                    )
                })}
            </section>
        )
    }
}

export default NowPlaying;
