import React, { Component } from 'react';
import {render} from 'react-dom';
import Root from './components/Root';

class App extends Component {
  render() {
    return (
      <Root />
    )
  }
}

render(<Root />, document.getElementById('root'));
