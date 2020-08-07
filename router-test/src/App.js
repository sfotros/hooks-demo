import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Random from './components/Random';
import RandomHook from './components/RandomHook';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />
        <Random />
        <RandomHook />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Project} />
      </div>
    </BrowserRouter>
  );
};

export default App;
