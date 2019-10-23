import React from 'react';
import '../directoryHeader/HeaderStyling.css'

const DirectoryHeader = ({genresBoxNames}) => {
    return (
        <div className="dir-header">
            <input className="search-input" placeholder='Search here...' />
            <div className="checkbox-wrapper">
                {genresBoxNames.map((movieGenre) => {
                    console.log('this is', movieGenre)
                    return <div className="genre-checkboxes"><input className="check-box" type="checkbox" name={movieGenre} value={movieGenre}/><span className="genre-text">{movieGenre}</span></div>
                })}
            </div>
        </div> 
    )
}

export default DirectoryHeader

