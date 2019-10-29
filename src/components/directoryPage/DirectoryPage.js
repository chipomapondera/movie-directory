import React, {Fragment, useState, useEffect} from 'react';
import {filter, debounce} from 'lodash';
import DirectoryHeader from './directoryHeader/DirectoryHeader';
import DirectoryBody from './directoryBody/DirectoryBody';
import '../directoryPage/PageStyling.css'

const DirectoryPage = ({genresBoxNames, movieListInfo}) => {

    const [searchInput, setSearchInput] = useState('')
    const [movieData, setMovieData] = useState(movieListInfo)
    const [value, setValue] = useState(false)

    const userSearch = debounce(() => {
        if (searchInput) {
            const filterData = filter(movieListInfo, function(movie) {
                return movie.movieYear.includes(searchInput) || movie.movieName.toLowerCase().includes(searchInput)
            })
                setMovieData(filterData)
            } else {
        setMovieData(movieListInfo)
    }
}, 250, { 'maxWait': 1000})

useEffect(() => {
    userSearch()
}, [searchInput])

const genreSelected = (genreSelector) => {
    if(genreSelector) {
        const filterData = filter(movieListInfo, function(movie) {
            return movie.movieGenres.includes(genreSelector)
        })
        setMovieData(filterData)
    } else {
        setMovieData(movieListInfo)
    }
}
    

    return (
        <>
            <DirectoryHeader 
            genresBoxNames={genresBoxNames}
            value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
            handleToggle={()=> genreSelected}
            />
            <DirectoryBody movieListInfo={movieData}/>
        </>
    )
}

export default DirectoryPage

