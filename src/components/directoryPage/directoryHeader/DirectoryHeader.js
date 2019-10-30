import React from 'react';
import '../directoryHeader/HeaderStyling.css'

const DirectoryHeader = ({genresBoxNames, value, onChange, handleToggle}) => {
    return (
        <div className="dir-header">
            <input className="search-input" value={value} onChange={onChange} placeholder='Search here...' />
            <div className="checkbox-wrapper">
                {genresBoxNames.map((movieGenre) => {
                    return <div className="genre-checkboxes"><input className="check-box" type="checkbox" name={movieGenre} value={movieGenre} onChange={(e)=>handleToggle(e)} /><span className="genre-text">{movieGenre}</span></div>
                })}
            </div>
        </div> 
    )
}

export default DirectoryHeader

