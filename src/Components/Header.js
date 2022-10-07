import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Styles from "./style.module.css";

export default class Header extends Component {
  render() {
    return (
        <nav className={Styles.nav}>
            <h2>Logo</h2>
            <div id={Styles.links}>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link> 
            </div>
        </nav>
     
    )
  }
}
