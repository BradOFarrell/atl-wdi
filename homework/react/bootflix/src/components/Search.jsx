import React, { Component } from 'react';

// Update the forms to utilize methods being passed down from App.js
class Search extends Component {
  render(){
    return (
      <section id="movie-search">
        <strong>Search by:</strong> Title <em>or</em> ID
  
        <div className="search">
          <form id="title-search-form" method="get" onSubmit={(e)=>{
            this.props.searchByTitle(document.getElementById("tsearch").value)
            e.preventDefault();
            e.stopPropagation();
          }}>
            <input type="text" name="title" id="tsearch" placeholder="Enter movie title" />
            <input type="submit" value="Search for this title" />
          </form>
        </div>
  
        <div className="search">
          <form id="id-search-form" method="get" onSubmit={(e)=>{
            this.props.searchById(document.getElementById("gisearch").value)
            e.preventDefault();
            e.stopPropagation();
          }}>
            <input type="text" name="id" id="isearch"  placeholder="Enter omdb movie ID" />
            <input type="submit" value="Search by ID" />
          </form>
        </div>
  
      </section>
    );
  }
};

export default Search;