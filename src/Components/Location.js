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
                                key={index}
                                className="Truck-wrapper"
                                onMouseOver={ () => props.clickLocation(location) }
                            >
                                <div className="Truck-image"
                                // onMouseLeave={props.closeAllInfoWindow}
                                ></div>
                                <div className="Truck">
                                    <h3>{location.applicant}</h3>
                                    <p>{location.address}</p>
                                    <p>{location.fooditems}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={props.openDrawer}>
                {
                    props.drawer ? <i className="fas fa-less-than"></i> : <i className="fas fa-greater-than"></i> 
                }
            </button>
        </div>
    )
}

export default Location