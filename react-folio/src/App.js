import React from 'react';
import Home from '../src/components/Home/index';
import About from '../src/components/About/index';
import Projects from '../src/components/Projects/index';
import Contact from '../src/components/Contact/';
import './App.css';

function App() {
  return (
    <div>
      <main>
        <Home></Home>
        <Projects></Projects>
        <About></About>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
