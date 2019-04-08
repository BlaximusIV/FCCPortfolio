import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import DrumMachine from './Components/Drum Machine/DrumMachine.js'

class App extends React.Component {
  render = () =>  
    <div className="App">
      <Header/>
      <DrumMachine/>
      <Footer/>
    </div>
}

export default App;
