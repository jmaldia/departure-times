import React, { Component } from 'react';
import GoogleMapComponent from './Components/GoogleMapComponent'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GoogleMapComponent
          {...this.state}
        />
      </div>
    );
  }
}

export default App;
// clickMarker={this.clickMarker}