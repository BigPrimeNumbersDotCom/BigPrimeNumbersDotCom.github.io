'use strict';

import React, { Component } from 'react';

class NavItem extends Component {
  constuctor(props:?Object){
    super(props)
    this.state = { active: false };
  }
  _onClick(){
    this.setState({active:true});
  }
  render() {
    const {
      title
    } = this.props;
    return (
      <Button
        onClick={ this._onClick.bind(this) }
        style={ styles.button }>{title}</Button>
    )
  }
}

const styles = {
  button: {}
}
