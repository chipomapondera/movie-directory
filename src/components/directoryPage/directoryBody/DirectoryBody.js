import React from 'react';
import MovieCard from '../directoryBody/movieCard/MovieCard';
import MovieGenre from '../directoryBody/movieGenre/MovieGenre';
import '../directoryBody/BodyStyling.css';

const BodyWrapper = (props) => {
    return (
        <div className="body-wrapper">
            {props.children}
        </div>
    )
}

const DirectoryBody = ({movieListInfo}) => {
    return (
        <BodyWrapper>
            <div className="dir-wrapper">
                {movieListInfo.map((movie)=> {
                    const {imageUrl, movieName, movieYear, movieGenres} = movie
                    return <div className="card-container">
                        <MovieCard imageUrl={imageUrl} movieName={movieName} movieYear={movieYear} />
                        <MovieGenre movieGenres={movieGenres}/>
                    </div>
                })}
            </div>
        </BodyWrapper>
    )
}

export default DirectoryBody

