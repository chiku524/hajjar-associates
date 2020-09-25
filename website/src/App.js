import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Consulting from './components/Consulting';
import PrivateProjects from './components/PrivateProjects';
import PublicProjects from './components/PublicProjects';
import About from './components/About';
import Contact from './components/Contact';
import Construction from './components/Construction';
import ScrollToTop from './components/ScrollToTop';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ScrollToTop>
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
          <Route exact path='/construction'>
            <Construction />
          </Route>
        </Switch>
      </ScrollToTop>
      
    </div>
  );
}

export default App;
