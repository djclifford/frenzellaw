'use strict';

import React from 'react';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><a href="about">Investor</a></li>
              <li><a href="about">Lanlord or Tenant</a></li>
              <li><a href="about">Building Code Violations</a></li>
              <li><a href="about">Purchase & Sale</a></li>
              <li><a href="about">LLC/Corporation Formations</a></li>
              <li><a href="about">Other</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

}

export default NavBar;
