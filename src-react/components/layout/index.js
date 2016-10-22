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
    return(
      <div style={styles.layout} className="bpn-layout">
        <div style={styles.drawer} className="bpn-layout__drawer">
          <Menu
            title="Big Prime Numbers"
            items={
              [
               {label: 'Work', link: '/work' },
               {label: 'Projects', link: '/projects' },
               {label: 'Blog', link: '/blog' }
              ]
            }
          />
        </div>
        <div style={styles.content} className="bpn-content">
          {/* Page */}
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout
