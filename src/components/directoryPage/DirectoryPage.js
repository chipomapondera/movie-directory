import React, {Fragment, useState, useEffect} from 'react';
import {filter, debounce} from 'lodash';
import DirectoryHeader from './directoryHeader/DirectoryHeader';
import DirectoryBody from './directoryBody/DirectoryBody';
import '../directoryPage/PageStyling.css'

const DirectoryPage = ({genresBoxNames, movieListInfo}) => {

    const [searchInput, setSearchInput] = useState('')
    const [movieData, setMovieData] = useState(movieListInfo)
    const [searchArray, setSearchArray] = useState([])

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
        if(genreSelector.length >= 1) {
            const filterData =movieListInfo.filter(function(movie) {
                return movie.movieGenres.some((category)=> genreSelector.includes(category))
            })
            setMovieData(filterData)
        } else {
            setMovieData(movieListInfo)
        }
    }

    const updateSearchArray = (e)=> {
        if(searchArray.includes(e)) {
            const filterData =searchArray.filter((item)=> {
                return !(item===e)
            })
            genreSelected(filterData)
            setSearchArray(filterData)
        } else {
            const filterData = searchArray
            filterData.push(e)
            genreSelected(filterData)
            setSearchArray(filterData)
        }
    }

    return (
        <>
            <DirectoryHeader 
            genresBoxNames={genresBoxNames}
            value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
            handleToggle={(e)=>updateSearchArray(e.target.value)}
            />
            <DirectoryBody movieListInfo={movieData}/>
        </>
    )
}

export default DirectoryPage

