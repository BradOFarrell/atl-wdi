import React, { Component } from "react";
import MenuItem from '../components/MenuItem.js';
import pizzaData from '../pizzaData.js';

class MenuList extends Component {
  render() {
    return (
      <div className="menu">
        <a name="menu"/>
        <h1>Menu</h1>
        <div className="menu-container">
          {
              pizzaData.map((obj, index)=>{
              return <MenuItem name={obj.name}
                                price={obj.price}
                                description={obj.description}
                                image={obj.image}/>
            })
          }
          </div>
      </div>
    );
  }
}

export default MenuList;