'use strict';

import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import styles from './styles'

class MenuItem extends Component{
  constructor(props){
    super(props);
  }
  render(){
   let { label, link } = this.props;
    return(
      <Link className="bpn-nav__link"
        style={styles.navLink}
        to={link}>{ label }</Link>
    )
  }
}

MenuItem.propTypes = {
 label: PropTypes.string.isRequired,
 link: PropTypes.string.isRequired,
};

// TODO rename this to drawer.js
class Menu extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let { title, items } = this.props;
    return(
      <div style={styles.drawer} className="bpn-menu">
        <div style={styles.drawerLogo} className="bpn-menu__logo">
        {/* TODO make image or special node  */}
          <Link style={styles.link} to="/">{title}</Link>
        </div>
        <div style={styles.drawerMenu} className="bpn-menu__nav">
        {/* TODO: nav to js file move to   */}
          <nav style={styles.nav} className="bpn-nav">
            {
              items.map(
                function(item,i) {
                  let {label, link} = item;
                  return (<div style={styles.navItem} className="bpn-nav__item" key={i}>
                    <MenuItem label={label} link={link} />
                  </div>)
                }
              )
            }
          </nav>
        </div>
        <div style={styles.filler}></div>
      </div>
    )
  }
}

export default Menu
