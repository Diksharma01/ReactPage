import React, { Component } from 'react'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Contact from './Components/Contact';
import About from './Components/About';
 import Homepage from './Components/Homepage';
import Styles from "./Components/style.module.css";

 import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
 
export default class App extends Component {

  render() {
    return (
      <div className={Styles.back}>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/home" element={<Homepage/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
      </div>
    )
  }
}
