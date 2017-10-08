import React, { Component } from 'react';

class Homepage extends Component {
    render(){
        return(
            <div>
                <h1> Sup {this.props.name} I love {this.props.happy}</h1>
            </div>
        );
    }
}

export default Homepage