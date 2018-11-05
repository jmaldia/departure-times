import React from 'react'

const Location = props => {
    return (
        <div className="Location">
            {
                props.locations.map((location, index) => {
                    return <p key={index}>{location.applicant}</p>
                })
            }
        </div>
    )
}

export default Location