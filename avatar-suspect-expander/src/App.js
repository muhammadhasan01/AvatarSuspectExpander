import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import { TextField, Typography } from '@material-ui/core';

const nameOfTitle = "Avatar Suspect Expander";

const App = () => {
    return (
      <div className="App">
        <Navbar nameTitle={nameOfTitle}/>
      </div>
    )
};

export default App;
