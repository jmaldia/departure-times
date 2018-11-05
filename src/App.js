import React, { Component } from 'react'

import Search from './Components/Search'
import Location from './Components/Location'
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

    dataSFGov.getDataSF().then(locations => {
      this.setState({locations})
    })

    if (this.state.locations[20]) {
      this.setState({
        currentLocation: this.state.locations[20].location.coordinates
      })
    }
  }

  render() {
    const { loading, currentLocation } = this.state;
    const { google } = this.props;

    if (loading) {
      return null;
    }

    console.log(this.state.locations[20])

    return (
      <div className="App">
        <Search {...this.state} />
        <Location {...this.state} />
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