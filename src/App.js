import React from 'react';
import GameList from './components/GameList'
import Screenshots from './components/Screenshots'
import {Switch, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={GameList}/>
        <Route exact path="/jeu/screenshots/:id" component={Screenshots}/>
      </Switch>
    </div>
  );
}

export default App;
