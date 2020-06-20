import React from 'react';
import Navbar from './Navbar/Navbar';
import FriendList from './FriendList/FriendList';

const nameOfTitle = "Avatar Suspect Expander";

const App = () => {
    return (
      <div className="App">
        <Navbar nameTitle={nameOfTitle} variant='h5' />
        <FriendList />
      </div>
    )
};

export default App;
