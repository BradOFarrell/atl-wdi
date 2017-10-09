import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
        <div className="navbar">
          <a href="#description">Our Story</a>
          <a href="#menu">Menu</a>
          <h2>PIZZA-EXPRESS</h2>
          <a href="#locations">Locations</a>
          <a href="#contact">Contact</a>
      </div>
    );
  }
}

export default Navbar;