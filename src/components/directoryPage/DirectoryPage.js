import React, {Fragment, useState, useEffect} from 'react';
import {filter, debounce} from 'lodash';
import DirectoryHeader from './directoryHeader/DirectoryHeader';
import DirectoryBody from './directoryBody/DirectoryBody';
import '../directoryPage/PageStyling.css'

const DirectoryPage = ({genresBoxNames, movieListInfo}) => {

    const [searchInput, setSearchInput] = useState(null)
    const [movieData, setMovieData] = useState(movieListInfo)

    const userSearch = () => {

        if (searchInput) {
            if (typeof searchInput) {
                const filterDataName = filter(movieListInfo, function(movie) {
                    const inputMovieName = movie.movieName.toLowerCase()
                    return inputMovieName.includes(searchInput)
                })
                setMovieData(filterDataName)
            }
    } else {
        setMovieData(movieListInfo)
    }
}

useEffect(() => {
    userSearch()
}, [searchInput])

    return (
        <>
            <DirectoryHeader 
            genresBoxNames={genresBoxNames}
            value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
            />
            <DirectoryBody movieListInfo={movieData}/>
        </>
    )
}

export default DirectoryPage

