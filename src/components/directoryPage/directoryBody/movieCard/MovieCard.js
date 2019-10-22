import React from 'react';
import '../movieCard/CardStyling.css'

const MovieCard = ({imageUrl, movieName, movieYear}) => {
    return (
        <div className="movie-card">
            <div className="image-wrapper">
                <img className="movie-image" src={imageUrl}/>
            </div>
            <div className="info-wrapper">
                <div className="movie-name">{movieName}</div>
                <div className="movie-year">{movieYear}</div>
            </div>
        </div>
    )
}

export default MovieCard

