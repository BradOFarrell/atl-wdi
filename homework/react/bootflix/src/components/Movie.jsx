import React, { Component } from 'react';

// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
class Movie extends Component {
  render(){
    console.log(this.props.movie)
    return (
      <section id="movie-listing">
        <div className="movie">
          <h3>{this.props.movie.Title}</h3>
          <p>
            <strong>Released:</strong> {this.props.movie.Year}<br />
            <strong>Directed By:</strong> {this.props.movie.Director}<br />
            <em>Genre: {this.props.movie.Genre}</em>
          </p>
          <p>{this.props.movie.Plot}</p>
        </div>
      </section>
    );
  }
};

export default Movie;


