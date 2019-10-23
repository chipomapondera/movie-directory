import React from 'react';
import '../directoryHeader/HeaderStyling.css'

const DirectoryHeader = ({genresBoxNames, value, onChange, onClickHandler, allOnClickHandler}) => {
    return (
        <div className="dir-header">
            <input className="search-input" value={value} onChange={onChange} placeholder='Search here...' />
            <div className="button-wrapper">
                {genresBoxNames.map((movieGenre) => {
                    console.log('movieGenre', movieGenre)
                    return <button className="this-button" onClick={()=>onClickHandler(movieGenre)}>{movieGenre}</button>
                })}
                <button className="all-button" onClick={()=>allOnClickHandler()}>All</button>
            </div>
        </div> 
    )
}

export default DirectoryHeader

