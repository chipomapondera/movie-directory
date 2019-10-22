import React, {Fragment} from 'react';
import DirectoryHeader from './directoryHeader/DirectoryHeader';
import DirectoryBody from './directoryBody/DirectoryBody';
import '../directoryPage/PageStyling.css'


const DirectoryPage = ({genresBoxNames, movieListInfo}) => {
    return (
        <>
            <DirectoryHeader genresBoxNames={genresBoxNames}/>
            <DirectoryBody movieListInfo={movieListInfo}/>
        </>
    )
}

export default DirectoryPage

