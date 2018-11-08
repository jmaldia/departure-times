/*global google*/

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
        lat: 37.7689242,
        lng: -122.4170418
      }, 
      loading: true,
      locations: [],
      markers: [], 
      drawer: false
    }
  }

  componentDidMount(props) {
    this.setState({ loading: false });

    // Grabs food truck data
    dataSFGov.getDataSF().then(locations => {
      // Creates array for markers
      const markers = locations.map(location => {
        return {
          address: location.address,
          applicant: location.applicant, 
          foodItems: location.fooditems,
          coordinates: {
            lat: Number(location.latitude),
            lng: Number(location.longitude)
          },
          schedule: location.schedule,
          isOpen: false, 
          isVisible: true,
          animation: 0
        }
      })

      this.setState({
        locations, 
        markers
      })
    })
  }


  // Shows food trucks around the user within a specific radius
  handleLocalization = (event) => {
    event.preventDefault()
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
  }


  // Closes all the infoWindow - helper
  closeAllInfoWindow() {
    this.state.markers.forEach(markerMap => {
      markerMap.isOpen = false
    })
    this.setState((prevState) => ({ markers: prevState.markers }))
  }


  // Shows infoWindow when a marker is clicked
  // Closes other windows when a marker is clicked
  clickMarker = (marker) => {
    this.closeAllInfoWindow()
    marker.isOpen = true

    this.setState((prevState) => ({ markers: prevState.markers }))
  }


  // Opens the sidebar 
  // This uses the state drawer to use a specific class when the state is true/false
  openDrawer = () => {
    this.setState({ drawer: !this.state.drawer })
  }



  render() {
    const { loading, currentLocation } = this.state;

    if (loading) {
      return null;
    }

    console.log(this.state.markers)
    console.log(this.state.locations[20])

    return (
      <div className="App">
        <Search {...this.state} handleLocalization={this.handleLocalization}/>
        <Location 
          {...this.state} 
          openDrawer={this.openDrawer}  
          clickMarker={this.clickMarker}
          closeAllInfoWindow={this.closeAllInfoWindow}
        />
        <GoogleMapComponent
          {...this.state}
          initialCenter={currentLocation} 
          clickMarker={this.clickMarker}
        />
      </div>
    );
  }
}

export default App;
// clickMarker={this.clickMarker}