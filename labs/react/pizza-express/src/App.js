import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import SplashImage from './components/SplashImage.js';
import Description from './components/Description.js';
import LocationList from './components/LocationList.js';
import MenuList from './components/MenuList.js';
import Contact from './components/Contact.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <SplashImage/>
        <Description/>
        <MenuList/>
        <LocationList/>
        <Contact/>
        </div>
    );
  }
}

export default App;
