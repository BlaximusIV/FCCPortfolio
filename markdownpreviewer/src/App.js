import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from '../src/Components/Header/Header'
import Body from '../src/Components/Body/Body'
import Footer from '../src/Components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
