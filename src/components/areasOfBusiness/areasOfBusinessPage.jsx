'use strict';

import React from 'react';
import {Tab, Row, Col, Nav, NavItem} from 'react-bootstrap';
import selfie from '../../images/selfie.png';
import style from './areasOfBusinessPage.scss'

class AreasOfBusinessPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={4}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="first">Real Estate Invstors</NavItem>
                <NavItem eventKey="second">Lanlord or Tenant</NavItem>
                <NavItem eventKey="third">Building Code Violations</NavItem>
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content animation>
                <Tab.Pane eventKey="first">
                  Tab 1 content
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Tab 2 content
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }

}

export default AreasOfBusinessPage;
