import React from 'react';
import logo from './logo.svg';
import './App.css';
import './media.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './pages/Projects';
import Portfolio from './pages/Resume';
import Contact from './pages/About';
import About from './pages/About';
import Research from './pages/Research';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import planning from './pages/planning';
import oralhistory from './pages/oralhistory';
import lighthouse from './pages/lighthouse';
import discharge from './pages/discharge';
import outreach from './pages/outreach';
import covid from './pages/covid';



function App() {
  return <BrowserRouter>
    <div className="App">

      <header className="App-header">
        <div className='logo'>
          <p>ab</p>
        </div>
        <div className='menu'>
          <Link to="/">design</Link>  {/*Changed name to add research tabs*/}
          <Link to="/research">research</Link>
          <Link to="/resume">resume</Link>
          <Link to="/about">about</Link>
        </div>
      </header>

      <Route path="/" exact component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route path="/research" component={Research} />
      <Route path="/about" component={About} />
      <Route path="/planning" component={planning} />
      <Route path="/oralhistory" component={oralhistory} />
      <Route path="/lighthouse" component={lighthouse} />
      <Route path="/discharge" component={discharge} />
      <Route path="/outreach" component={outreach} />
      <Route path="/covid" component={covid} />



      <footer className='App-footer'>
        <div className='footer-Container'>
          <p>boone1000[at]gmail.com</p>
          <p><a href="https://www.linkedin.com/in/ashleynboone/">linkedin</a></p>
          <p><a href="https://github.com/boone1000">github</a></p>
        </div>
        <p>Built by Ashley Boone</p>


      </footer>

    </div>
  </BrowserRouter>
}

export default App;
