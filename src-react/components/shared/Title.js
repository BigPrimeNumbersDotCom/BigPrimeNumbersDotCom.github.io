'use strict';
import React, { Component } from 'react';

class Title extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let { title } = this.props;
    return(
      <h2 className="bpn-title">{title}</h2>
    )
  }
}
export default Title
