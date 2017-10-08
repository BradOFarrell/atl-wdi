import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from "./components/Homepage.js"

class App extends Component {
  constructor(){
    super()
    this.state = {
      itemCurrentlyOnSale: "hammer",
      editSaleItem: true      
    };     
  }
  toggleEditSaleItem = () => {
    const editSaleItem = !this.state.editSaleItem;
    this.setState({editSaleItem});
  };
  handleItemCurrentlyOnSaleChange = () => {
    
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.state.itemCurrentlyOnSale} </h1>
        </header>
        <p className="App-intro">
          <button onClick={this.toggleEditSaleItem}>Hello</button>
          To get for, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        {
          this.state.editSaleItem ?
            <div>
              <input
                  onChange={this.handleItemCurrentlyOnSaleChange}
                  value={this.state.itemCurrentlyOnSale}
                  type="text"
              />
            </div>
            : null
        }
        </div>
        <Homepage name="fam" happy="austin"/>
      </div>
    );
  }
}

export default App;
