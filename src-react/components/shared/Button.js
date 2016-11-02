/**
 * @flow
 */
'use strict';

import React, { Component } from 'react';

class Button extends Component {
  render(){
    let { label, onClick } = this.props;
    return(
      <button onClick={onClick}
        className="bpn-button bpn-button--outline">{label}</button>
    )
  }
}

export default Button;
