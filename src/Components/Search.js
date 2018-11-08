import React from 'react'

const Search = props => {
    return (
        <div className="Search">
            <form> 
                
                    <button 
                        onClick={(event) => props.handleLocalization(event, 13)}
                    >
                        The Whole City
                    </button>
                    <button 
                        onClick={(event) => props.handleLocalization(event, 15)}
                    >
                        Wider Area
                    </button>
                    <button 
                        onClick={(event) => props.handleLocalization(event, 17)}
                    >
                        A Few Blocks
                    </button>
            </form>
        </div>
    )
}

export default Search
// <input type="text" placeholder="Type your location"></input>