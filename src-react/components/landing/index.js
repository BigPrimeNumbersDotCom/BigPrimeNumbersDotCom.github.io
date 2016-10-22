/**
 * @flow
 */
'use strict';

import React, {Component} from 'react'
import styles from './styles'

class Layout extends Component {
  _onClick(){
    console.log('clicked', arguments);
  }
  render(){
    return(
      <div style={styles.splash} className="bpn-splash">
        <div style={styles.content} className="bpn-splash__content">
          <div style={styles.wrapper} className="bpn-splash__wrapper">
            <div
              style={styles.title}
              className="bpn-type__display-4">Big <span
                className="bpn-type__display-4 bpn-type--alternate"
                style={styles.titleAlt}>Prime</span> Numbers</div>
            <p style={styles.about} className="bpn-type__body-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

      </div>
    )
  }
}

export default Layout
