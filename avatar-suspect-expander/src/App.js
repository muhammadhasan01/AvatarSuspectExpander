import React from 'react';
import Navbar from './Navbar/Navbar';
import SearchGraph from './SearchGraph/SearchGraph';

const nameOfTitle = "Avatar Suspect Expander";

const App = () => {
    return (
      <div className="App">
        <Navbar nameTitle={nameOfTitle} variant='h5' />
        <SearchGraph />
      </div>
    )
};

export default App;
