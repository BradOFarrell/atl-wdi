import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movie: example,
      apiurl: "http://img.omdbapi.com/?apikey=d31f1a94&"
    }
  }

  // http://img.omdbapi.com/?i=tt2294629&apikey=d31f1a94 
  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  _searchByTitle = (title) => {
    let searchURL = "http://www.omdbapi.com/?i=tt3896198&apikey=d36d1964"
    console.log(searchURL)
    axios.get(searchURL).then((res) => {
      console.log(res.data);
      this.setState({movie: res.data})
    })
    .catch((err) => {
      console.log("Error loading users. "+err);
    })

    console.log("Search by Title: "+title);
  }

  _searchById = () => {
    console.log("Search by ID");
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  componentDidMount(){
    this._searchByTitle("Spiderman");
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Movie movie={this.state.movie}/>
      </div>
    );
  }
}

export default App;
