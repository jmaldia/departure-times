import React from 'react'

const Location = props => {
    return (
        <div className="Location">
            <div className="Venues">
                {
                    props.locations.map((location, index) => {
                        return (
                            <div className="Truck-wrapper">
                                <div className="Truck-image"></div>
                                <div key="index" className="Truck">
                                    <h3>{location.applicant}</h3>
                                    <p>{location.address}</p>
                                    <p>{location.fooditems}</p>
                                    <a href={location.schedule}>Schedule</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button><i class="fas fa-greater-than"></i><i class="fas fa-less-than"></i></button>
        </div>
    )
}

export default Location


// <p>Latitude: {location.latitude}</p>
// <p>Longitude: {location.longitude}</p>