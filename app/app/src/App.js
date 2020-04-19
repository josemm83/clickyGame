import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Grid from './components/Grid';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Grid />
      <Footer />
    </div>
  );
}

export default App;
