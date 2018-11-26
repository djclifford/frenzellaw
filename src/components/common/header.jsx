'use strict';

import React from 'react';
import {Link} from 'react-router';
import logo from './../../images/logo.png';
import twitter from '../../images/twitter.png';

import style from './header.scss';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }


  // <body data-spy="scroll" data-target=".navbar" data-offset="50">

  // <!-- The navbar - The <a> elements are used to jump to a section in the scrollable area -->
  // <nav className="navbar navbar-inverse navbar-fixed-top">
  //   <ul className="nav navbar-nav">
  //   <li><a href="#section1">Section 1</a></li>
  // </nav>

// <nav className="navbar navbar-inverse navbar-fixed-top">
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li id="logo"><Link to="app"><img src={logo}/></Link></li>
            <li><Link to="app">Home</Link></li>
            <li><Link to="about">About Me</Link></li>
            <li><Link to="areasOfBusiness">Areas of Business</Link></li>
            <li><Link to="contactUs">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    );
  }

  /*
  <li style={{float: "right"}}><img src={twitter} width="35%" height="35%"/></li>


  <ul className="nav nav-tabs">
    <li><a>Home</a></li>
    <li><a href="#about">Attorneys</a></li>
    <li className="dropdown">
      <div className="dropdown-content">
        <a className="dropbtn" href="#">Areas of Business <b className="caret"></b></a>
        <ul className="">
          <li><a>Investor</a></li>
          <li><a>Lanlord / Tenant</a></li>
          <li><a>Building Code Violations</a></li>
          <li><a>Purchase of Sale</a></li>
          <li><a>LLC or Corporation Formations</a></li>
          <li><a>Other Areas of Practice</a></li>
        </ul>
      </div>
    </li>
    <li><a>Contact Us</a></li>
  </ul>





  */

}

export default Header;
