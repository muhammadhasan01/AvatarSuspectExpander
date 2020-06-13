import React from 'react';
import Navbar from './Navbar/Navbar';
import SearchBar from './SearchBar/SearchBar';

const nameOfTitle = "Avatar Suspect Expander";

const App = () => {
    return (
      <div className="App">
        <Navbar nameTitle={nameOfTitle}/>
        <SearchBar />
      </div>
    )
};

export default App;
