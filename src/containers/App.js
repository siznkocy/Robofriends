import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users)); 
  },[]);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

      const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      
      return !robots.length ?
        <h1 className = 'tc pa2'>Loading...</h1> :
       (
        <div className = 'tc code b--black-20'>
          <h1 className = 'f1'>Robofriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
}

export default App;