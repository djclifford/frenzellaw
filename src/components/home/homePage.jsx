'use strict';

import React from 'react';
import {Link} from 'react-router';
import ReactDom from 'react-dom';
import Carousel from 'react-bootstrap';
import Waypoint from 'react-waypoint';
import Bootstrap from 'bootstrap';

import selfie from '../../images/selfie.png';
import twitter from '../../images/twitter.png';
import googlePlus from '../../images/google-plus.png';
import github from '../../images/github.png';

import style from './homePage.scss';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab() {
    alert('waypoint');
  }

  render() {
    return (
      <div>
        <section>
          <div>
            <div className="contact">
              <ul>
                <li><a href="http://twitter.com/djclifford87"><img src={twitter} width="25%" height="25%"/></a></li>
                <li><a href=""><img src={googlePlus}/></a></li>
                <li><a href="http://github.com/djclifford"><img src={github}/></a></li>
              </ul>
            </div>
            <div className="selfie">
              <img src={selfie} />
            </div>
          </div>
        </section>

        <section>
          <Waypoint onEnter={this.changeTab} onLeave={this.changeTab} />
          <div className="jumbotron">
            <h1>Software Developer</h1>
            <p>Looking to expand my skills as a front-end software developer.</p>
            <Link to="about" className="btn btn-primary btn-lg">Let's work together!</Link>
          </div>
        </section>
      </div>
    );
  }

}

export default Home;
