'use strict';

import React from 'react';
import map from '../../images/frenzellaw_map.png';
import style from './contactUsPage.scss';

class ContactUsPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="contact-info-section">
          <section>120 W. Madison, #1407</section>
          <section>Chicago, IL 60602</section>
          <section><a href="mailto:nfrenzel@nicholasfrenzel.com">nfrenzel@nicholasfrenzel.com</a></section>
          <section>(312) 213-4707 Phone</section>
          <section>(866) 600-2081 Fax</section>
        </div>
        <div id="map-section">
          <image id="map" src={map}></image>;
        </div>
      </div>
    );
  }

}

export default ContactUsPage;
