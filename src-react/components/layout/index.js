/**
 * @flow
 */
'use strict';

import React, {Component} from 'react'
import Menu from './menu';
import styles from './styles'

class Layout extends Component {
  _onClick(){
    console.log('clicked', arguments);
  }

  render(){
    let title = (
      <div style={styles.logo} className="bpn-logo">
        <div style={styles.logoType} className="bpn-logo--block">Big</div>
        <div style={styles.logoTypeAlt}  className="bpn-logo--lite">Prime</div>
        <div style={styles.logoType}  className="bpn-logo--block">Numbers</div>
      </div>
    )
    return(
      <div style={styles.layout} className="bpn-layout">
        <div style={styles.drawer} className="bpn-layout__drawer">
          <Menu
            title={title}
            items={
              [
               {label: 'Work', link: '/work' },
               {label: 'Projects', link: '/projects' },
               {label: 'Blog', link: '/blog' }
              ]
            }
          />
        </div>
        <div style={styles.content} className="bpn-layout__content">
          {/* Page */}
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout
