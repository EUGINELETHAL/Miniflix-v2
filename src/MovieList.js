import React, { Component } from 'react';
import Nav from './Nav'
import Search from './Search'

import Movie from './Movie'

 class MovieList extends Component {

  constructor(props) {
    super(props);
    this.state = {
    movies:[],
    searchTerm:""

    };
    // this.apiKey = process.env.REACT_APP_API
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=0ea2b1048640167f7abb52a7eff8d3ca')
      .then(res => res.json())
      .then(data => 
          this.setState({
            movies:[...data.results]
          }));
        }
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.




  onSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=0ea2b1048640167f7abb52a7eff8d3ca&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data =>{
      console.log(data);
      this.setState({movies: [...data.results]})
    })
  }

  onChange = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  render() {
      const movies=this.state.movies.map((movie)=>(< Movie key={movie.id} image={movie.poster_path} overview={movie.cast} year={movie.year}/>
        ));
    return (
 	<div>
       <Nav />
       <Search   onSubmit={this.onSubmit} onChange={this.onChange}/><br></br>

      {movies} 
      </div>
    )
  }
}

export default MovieList









// import React from 'react'

// const MovieList = (props) => {
//     return (
//         <div className="container">    
//             <div className="row">
//                 <div className="col s12">  
//             {
//              props.movies.map((movie, i) => {
//                 return (
                                      
//                 )
//             })
//             }
//             </div>
//         </div>
//     </div>
// )
// }

