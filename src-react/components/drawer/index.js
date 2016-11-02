/**
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import Title from '../shared/Title';
import Button from '../shared/Button';

// Remove on focus blue.
// add on active styling

class TextField extends Component {
  render(){
    let {name, placeholder} = this.props;
    return(
      <div className="bpn-form__text-field">
        <input className="bpn-form__input"
          name={name} type="text"
          placeholder={placeholder} />
      </div>
    )
  }
}

class TextArea extends Component {
  render(){
    let {name, placeholder} = this.props;
    return(
      <div className="bpn-form__text-field">
        <textarea className="bpn-forn__textarea"
          name={name} placeholder={placeholder}/>
      </div>
    )
  }
}

class Drawer extends Component {
  constructor(props){
    super(props);
    let { show=false } = this.props;
    this.state = { show };
  }

  componentWillReceiveProps(props){
    let { show } = props;
    this.setState({ show });
  }

  classNames(){
    let css = '';
    if(!this.state.show) css = "bpn-drawer--hidden"
    return `bpn-drawer
    bpn-drawer--right
    ${css}`;
  }

  send(){
    console.log(this);
  }

  render() {
    return (
      <div className={this.classNames()}>
        <Title title="Get In Touch" />
        <div className="bpn-drawer__content bpn-drawer__form">
          <TextField name="Name" placeholder="Name"/>
          <TextField name="Tel" placeholder="Tel"/>
          <TextField name="Email" placeholder="Email"/>
          <TextArea name="message" placeholder="A few words from youreself..."/>
          <div className="bpn-drawer__content--bottom">
            <Button label="Send" onClick={()=>this.send()} />
          </div>
        </div>
      </div>
    )
  }
}

export default Drawer;
