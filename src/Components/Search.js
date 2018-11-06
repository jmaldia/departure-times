import React from 'react'

const Search = props => {
    return (
        <div className="Search">
            <input type="text" placeholder="Type your location"></input>
            <button type="submit">Search</button>
        </div>
    )
}

export default Search