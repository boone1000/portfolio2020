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
import frontPage from './pages/frontpage';
import frontpage2025 from './pages/frontpage2025';
import cv from './images/BooneCV_Jul12025.pdf'



function App() {
  return <BrowserRouter>
    <div className="App">

      <header className="App-header">
        <div className='logo'>
          <p>ab</p>
        </div>
        <div className='menu'>
          <Link to="/">Research</Link>  
          <a href={'https://scholar.google.com/citations?user=5sfJKp0AAAAJ&hl=en&oi=ao'} target="_blank" >Publications</a>
          <a href={cv} target="_blank" >CV</a>
        </div>
      </header>

      <Route path="/" exact component={frontpage2025} />
      <Route path="/CV" exact component={frontpage2025} />

      <footer className='App-footer'>
        <div className='footer-Container'>
          <p>aboone34[at]gatech.edu</p>
          {/* <p><a href="https://www.linkedin.com/in/ashleynboone/">Linkedin</a></p>
          <p><a href="https://github.com/boone1000">Github</a></p>
          <p><a href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=5sfJKp0AAAAJ">Google Scholar</a></p> */}
        </div>


      </footer>

    </div>
  </BrowserRouter>
}

export default App;
