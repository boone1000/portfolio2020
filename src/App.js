import React from 'react';
import logo from './logo.svg';
import './App.css';
import './media.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './pages/Projects'
import Portfolio from './pages/Resume'
import Contact from './pages/About'
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

function App() {
  return <BrowserRouter>
    <div className="App">

      <header className="App-header">
        <div className='logo'>
          <p>ab</p>
        </div>
        <div className='menu'>
          <Link to="/">projects</Link>
          <Link to="/resume">resume</Link>
          <Link to="/about">about</Link>
        </div>
      </header>

      <Route path="/" exact component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route path="/about" component={About} />

    </div>
  </BrowserRouter>
}

export default App;
