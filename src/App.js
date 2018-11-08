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
        lat: 37.771721,
        lng: -122.4424658
      }, 
      loading: true,
      locations: [],
      markers: [], 
      drawer: true, 
      zoom: 13
    }
  }

  componentDidMount(props) {
    this.setState({ loading: false });

    // Grabs food truck data
    dataSFGov.getDataSF().then(locations => {
      // Creates array for markers
      const markers = locations.map((location, index) => {
        return {
          id: location.objectid,
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
  handleLocalization = (event, value) => {
    console.log(event.target)
    event.preventDefault()
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        
        this.setState({
          currentLocation: { lat: latitude, lng: longitude },
          loading: false, 
          zoom: value
        })
      },
      () => {
        this.setState({ loading: false });
      }
    )
  }


  // Closes all the infoWindow - helper
  closeAllInfoWindow() {
    this.state.markers.forEach(marker => {
      marker.isOpen = false
    })
    this.setState((prevState) => ({ markers: prevState.markers }))
  }


  // Shows infoWindow when a marker is clicked
  // Closes other windows when a marker is clicked
  clickMarker = (marker) => {
    this.closeAllInfoWindow()
    console.log(marker)
    marker.isOpen = true

    this.setState((prevState) => ({ markers: prevState.markers }))
  }

  clickLocation = (location) => {
    let marker = this.state.markers.find(marker => marker.id === location.objectid)
    
    this.clickMarker(marker)
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

    // console.log(this.state.locations[10])
    return (
      <div className="App">
        <Search {...this.state} handleLocalization={this.handleLocalization}/>
        <Location 
          {...this.state} 
          openDrawer={this.openDrawer}  
          clickLocation={this.clickLocation}
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