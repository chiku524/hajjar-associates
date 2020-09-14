import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Consulting from './components/Consulting';
import Projects from './components/Projects';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/consulting'>
          <Consulting />
        </Route>
        <Route exact path='/consulting/projects'>
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
