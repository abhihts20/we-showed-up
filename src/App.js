import React from 'react';
import './App.css';
import Home from './modules/Home'
import About from './modules/About'
import Portfolio from './modules/Portfolio'
import Contact from './modules/Contact'
import Navbar from './modules/Navbar'
import { Switch,Route,Redirect } from 'react-router-dom'

function App() {
  return (
      <>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </>
  );
}

export default App;
