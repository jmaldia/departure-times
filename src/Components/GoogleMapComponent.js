// global google
import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { keys } from '../APIs/keys';
import '../App.css'

const MapComponent = withScriptjs(withGoogleMap(props => 
    <GoogleMap
        defaultZoom={15}
        zoom={14}
        defaultCenter={ props.initialCenter }
        center={props.initialCenter}
    >
        { 
            props.markers && props.markers.filter(marker => marker.isVisible).map((marker, index) => {
                console.log(marker.coordinates)
                return (
                    <Marker 
                        key={index} 
                        position={marker.coordinates} 
                        onClick={() => props.clickMarker(marker) }
                        animation={marker.animation}
                        icon={'http://www.jonmaldia.com/img/van.png'}
                    >
                        { marker.isOpen && (
                            <InfoWindow>
                                <h3>{marker.applicant}</h3>
                            </InfoWindow>
                        )}
                    </Marker>
                )
            })
        }
    </GoogleMap>
))

class GoogleMapComponent extends Component {
    render() {
        return (
            <MapComponent
                {...this.props}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${keys.googleMaps.APIkey}`}
                loadingElement={<div style={{ height: `100%`,  width: `100%` }} />}
                containerElement={<div style={{ height: `100vh`, width: `100%` }} />}
                mapElement={<div style={{ height: `100%`, width: `100%` }} />}
            />
        )
    }
}


export default GoogleMapComponent
