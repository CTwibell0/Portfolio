import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Skills from './pages/Skills';


  
function App() {

  return (
    <Router>
      <Navbar/>
      <>
        <Home/>
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </>
    </Router>
  );
}
  
export default App;