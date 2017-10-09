import React, { Component } from "react";
import Location from '../components/Location.js';
import locationData from '../locationData.js';

class LocationList extends Component {
  render() {
    return (
      <div id="locations">
          <a name="location"/>
          <h1>Locations</h1>
          <div className="locations">
          {
              locationData.map((obj, index)=>{
              return <Location name={obj.name}
                               address={obj.address}
                               phone={obj.phone}/>
            })
          }
          </div>
      </div>
    );
  }
}

export default LocationList;