import React, { Component } from 'react'
import GoogleMapComponent from './Components/GoogleMapComponent'

import * as dataSFGov from './APIs/dataSFGov'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLocation: {
        lat: 0,
        lng: 0
      }, 
      loading: true,
      locations: [],
      marker: []
    }
  }

  componentDidMount(props) {
    
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          currentLocation: { lat: latitude, lng: longitude },
          loading: false
        })
      },
      () => {
        this.setState({ loading: false });
      }
    )

    // Load locations
    // const locationData = dataSFGov.getLocationSF()
    //   .then(locations => {
    //     return locations
    //   })

    console.log(dataSFGov.dataFromSFGov)
    this.setState({locations: dataSFGov.dataFromSFGov})
  }

  render() {
    const { loading, currentLocation } = this.state;
    const { google } = this.props;

    if (loading) {
      return null;
    }

    console.log(this.state.locations)

    return (
      <div className="App">
        <GoogleMapComponent
          google={google} 
          initialCenter={currentLocation} 
          zoom={10}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;
// clickMarker={this.clickMarker}