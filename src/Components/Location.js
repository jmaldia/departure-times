import React from 'react'

const Location = props => {
    let venueClass = props.drawer ? "Location" : "Location Location-hide"

    return (
        <div className={venueClass}>
            <div className="Venues">
                {
                    props.locations.map((location, index) => {
                        return (
                            <div 
                                className="Truck-wrapper"
                                // onMouseEnter={props.clickMarker}
                                // onMouseLeave={props.closeAllInfoWindow}
                            >
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
            <button onClick={props.openDrawer}>
                {
                    props.drawer ? <i class="fas fa-less-than"></i> : <i class="fas fa-greater-than"></i> 
                }
            </button>
        </div>
    )
}

export default Location