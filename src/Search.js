// import React, { Component } from 'react';
// import Axios from 'axios';
// import { moviedb_api_key } from './App'



// class Search extends Component {
//     state = {
//         results: null,
//         loading: false,
//         value: ''
//     };

//     search = async val => {
//         this.setState ({ loading: true });
//         const res = await Axios({
//             url: 'https://api.themoviedb.org/3/search/movie',
//             method: 'GET',
//             params: {
//                 query: val,
//                 api_key: moviedb_api_key
//             }
//         })

//         const movies = await res.data.results;

//         this.setState({ movies, loading: false});

//     }
// }



// export default Search;