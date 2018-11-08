import React from 'react'

const Search = props => {
    return (
        <div className="Search">
            <form> 
                <button type="submit" onClick={props.handleLocalization}>What's near me?</button>
            </form>
        </div>
    )
}

export default Search
// <input type="text" placeholder="Type your location"></input>