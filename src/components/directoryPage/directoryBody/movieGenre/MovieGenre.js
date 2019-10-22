import React from 'react';
import '../movieGenre/GenreStyling.css'

const MovieGenre = ({movieGenres}) => {
    return (
        <div className="genre-wrapper">
            {movieGenres.map((genre) => {
                return <div className="movie-genre">{genre}</div>
            })}
        </div>
    )
}

export default MovieGenre
