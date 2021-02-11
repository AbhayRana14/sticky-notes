import './App.css';
import MyCard from './Components/Cards/CardComponents';
import MyInput from './Components/Input/InputComponents';
import MyNavbar from './Components/Navbar/NavbarComponents';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <MyNavbar/>
      <MyInput/>
    </div>
    )
  }
}

