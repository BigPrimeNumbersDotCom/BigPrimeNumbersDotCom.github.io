/**
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './layout'
import Landing from './landing'
import Work from './work'
import Projects from './projects'
import Project from './project'
import Blog from './blog'
import Story from './story'


class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Landing} />
          <Route path="work" component={Work} />
          <Route path="projects" component={Projects} />
          <Route component={Projects}>
            <Route path="projects/:id" component={Project} />
          </Route>
          <Route path="blog" component={Blog} />
          <Route component={Blog}>
            <Route path="post/:id" component={Story} />
          </Route>
        </Route>
      </Router>
    )
  }
}

const styles={
  container:{
    display:'flex',
    flexDirection:'column',
    height:'100%',
  }
}

export default Root;
