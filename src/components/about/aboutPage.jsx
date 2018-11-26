'use strict';

import React from 'react';

class AboutPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-default btn-lg">
          <span className="glyphicon glyphicon-star" aria-hidden="true"></span> Star
        </button>
        <h1>About</h1>
        <p>
          This application uses the following technologies:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Webpack</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    );
  }

}

export default AboutPage;
