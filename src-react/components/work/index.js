/**
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import Drawer from '../drawer'
import styles from './styles'
import Title from '../shared/Title'


class Button extends Component {
  render(){
    let { label, onClick } = this.props;
    return(
      <button onClick={onClick}
        className="bpn-button bpn-button--outline">{label}</button>
    )
  }
}

class Work extends Component {
  constructor(props){
    super(props);
    this.state = { show: false };
  }

  toggle(){
    let show = this.state.show;
    this.setState({ show: !show });
  }

  render() {
    return (
      <div style={styles.section.container} className="bpn-section">
        <Drawer show={this.state.show} />
        <div style={styles.section.title} className="bpn-section__title">
          <Title title="Man, Developer, Innovator" />
        </div>
        <div className="bpn-section__content bpn-work">
          <div className="bpn-work__col bpn-work__col-main">
            <div className="bpn-work__section bpn-me">
              <h3 className="bpn-work__section-title">Me</h3>
              <div className="bpn-work__section-content">
                <p className="bpn-work__section-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
            <div className="bpn-work__section bpn-career">
              <h3 className="bpn-work__section-title">Career</h3>
              <div className="bpn-work__section-content">
                <div className="bpn-work__section-group">
                  <h4 className="bpn-work__section-header">Career History Title</h4>
                  <p className="bpn-work__section-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="bpn-work__section-group">
                  <h4 className="bpn-work__section-header">Career History Title</h4>
                  <p className="bpn-work__section-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
            <div className="bpn-work__section-content">
              <div className="bpn-work__section-paragraph bpn-work__section-paragraph--no-header">
                <button className="bpn-button bpn-button--outline">Download CV</button>
              </div>
            </div>
          </div>
          <div className="bpn-work__col bpn-work__col-sub">
            <div className="bpn-work__section">
              <div className="bpn-work__section-content">
                <h4 className="bpn-work__section-header">Skills</h4>
                <div className="bpn-work__skills-map"></div>
              </div>
            </div>
            <div className="bpn-work__section">
            <div className="bpn-work__section-content">
              <h4 className="bpn-work__section-header">Vision</h4>
              <p className="bpn-work__section-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            </div>
          </div>
        </div>
        <div style={styles.fixed.topRight} className="bpn-section__button">
          <Button label="Connect" onClick={()=>this.toggle()} />
        </div>
      </div>
    )
  }
}

export default Work;
