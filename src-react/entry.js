import React, { Component } from 'react';
import { render } from 'react-dom';
import Root from './components/Root';

class App extends Component {
  render() {
    return (
      <Root style={"height:100%;width:100%;"} />
    )
  }
}

render(<App />, document.getElementById('root'));
