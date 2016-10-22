'use strict';

import React, { Component } from 'react';

class Header extends Component {
  _navTo(source,e){
    console.log(e.target);
    e.target
  }
  render() {
    const { about } = this.props;
    return (
      <div style={ styles.header }>
        <div style={ styles.title }>Big Prime Numbers</div>
        <div style={ styles.flexSpacer }></div>
        <nav style={ styles.nav }>
          <button
            onClick={ this._navTo.bind(this, about.source) }
            style={ styles.navItem }>{about.title}</button>
          <button style={ styles.navItem }>Nav Item 2</button>
          <button style={ styles.navItem }>Nav Item 3</button>
        </nav>
      </div>
    )
  }
}

/**
 * onHover and onActive states for buttons
 */
const styles = {
  header:{
    height:80,
    display:'flex',
    paddingLeft:40,
    paddingRight:40,
    boxShadow:'0 1px 1px rgba(33,33,33,0.2)',
    zIndex:10,
  },
  title: {
    fontSize:20,
    padding:30,
    lineHeight:'20px',
    textTransform:'uppercase',
  },
  flexSpacer:{
    flex:1,
  },
  nav:{},
  navItem:{
    fontSize:16,
    lineHeight:'20px',
    padding:30,
    border:0,
    background:'none',
  },
};
