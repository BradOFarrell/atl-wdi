import React, { Component } from "react";

class MenuItem extends Component {
  render() {
    return (
      <div className="menu-item">
          <img src={this.props.image}/>
          <div className="menu-description">
          <div className="menu-item-name">{this.props.name}</div>
          <strong>Price: ${this.props.price}</strong>
          <br/>
          {this.props.description}
          </div>
      </div>
    );
  }
}

export default MenuItem;