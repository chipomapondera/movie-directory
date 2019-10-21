import React from 'react';
import data from './data/DirectoryData'
import DirectoryPage from './components/directoryPage/DirectoryPage'
import './App.css';



const App = () => {
  return (
    <div className="app">
      <DirectoryPage genresBoxNames={data.genresCheckboxes.genresInfo}/>
    </div>
  )
}


export default App;
