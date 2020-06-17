import React from 'react';
import Navbar from './Navbar/Navbar';
import SearchBar from './SearchBar/SearchBar';
import FriendDrawer from './FriendDrawer/FriendDrawer';

const nameOfTitle = "Avatar Suspect Expander";

const person = {
  id: 12,
  name: 'Hasan',
  element: 'fire',
  friends: [
    {
      id: 11,
      name: 'Sesuatu',
      element: 'water'
    },
    {
      id: 10,
      name: 'apa-gitu',
      element: 'earth'
    }
  ]
}

const App = () => {
    return (
      <div className="App">
        <Navbar nameTitle={nameOfTitle}/>
        <SearchBar />
        <FriendDrawer person={person} />
      </div>
    )
};

export default App;
