import React from 'react'

const Location = props => {
    return (
        <div className="Location">
            {
                props.locations.map((location, index) => {
                    return (
                        <div key="index">
                            <h1>{location.applicant}</h1>
                            <p>{location.address}</p>
                            <p>Latitude: {location.latitude}</p>
                            <p>Longitude: {location.longitude}</p>
                            <p>{location.fooditems}</p>
                            <a href={location.schedule}>Schedule</a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Location