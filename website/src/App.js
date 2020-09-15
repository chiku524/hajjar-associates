import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Consulting from './components/Consulting';
import PrivateProjects from './components/PrivateProjects';
import PublicProjects from './components/PublicProjects';
import About from './components/About';
import Contact from './components/Contact';
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
        <Route exact path='/consulting/private/projects'>
          <PrivateProjects />
        </Route>
        <Route exact path='/consulting/public/projects'>
          <PublicProjects />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
