import React from 'react'

const Location = props => {
    return (
        <div className="Location">
            {
                props.locations.map((location, index) => {
                    return (
                        <div>
                            <h1 key="index">{location.applicant}</h1>
                            <p>{location.address}</p>
                            <p>{location.fooditems}</p>
                            <a href={location.scheduler}>Schedule</a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Location