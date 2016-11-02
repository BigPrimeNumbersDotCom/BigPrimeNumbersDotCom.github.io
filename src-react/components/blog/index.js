/**
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import Title from '../shared/Title';
import Button from '../shared/Button';

class Card extends Component {
  render(){
    let imgSrc, postDate;
    const { post } = this.props
    const { title, description, date, imgUrl } = post;
    if (date) postDate = <div className="bpn-card__subtitle">{date}</div>
    if(!imgUrl) imgSrc = 'images/projects/placeholder.png';
    else imgSrc = imgUrl;

    return(
      <div className="bpn-card bpn-project__card">
        <div className="bpn-card__content">
          <div className="bpn-card__banner">
            <img src={imgSrc} className="bpn-card__image" />
          </div>
          <div className="bpn-card__title-bar">
            <h4 className="bpn-card__title">{title}</h4>
            { postDate }
          </div>
          <p className="bpn-card__description">{description}</p>
        </div>
      </div>
    )
  }
}


class Blog extends Component {
  componentDidMount(){
  }
  toggle(){
    console.log('view github');
  }
  render() {
    return (
      <div className="bpn-section">
        <div className="bpn-section__title">
          <Title title="Stories, Knowlegde, Experience" />
        </div>
        <div className="bpn-section__content bpn-blog">

        </div>
      </div>
    )
  }
}

export default Blog;
