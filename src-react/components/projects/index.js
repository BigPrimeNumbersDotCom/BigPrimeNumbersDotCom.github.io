/**
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import Title from '../shared/Title';
import Button from '../shared/Button';

class ProjectCard extends Component {
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

class Projects extends Component {
  componentDidMount(){
  }
  toggle(){
    console.log('view github');
  }
  render() {
    return (
      <div className="bpn-section">
        <div className="bpn-section__title">
          <Title title="Projects, Experiments, Fun" />
        </div>
        <div className="bpn-section__content bpn-projects">
          <div className="bpn-projects__row">
            <ProjectCard post={{
              title:'Some Project',
              description:'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula.',
            }} />
            <ProjectCard post={{
              title:'Some Project',
              description:'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula.',
            }} />
            <ProjectCard post={{
              title:'Some Project',
              description:'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula.',
            }} />
          </div>
          <div className="bpn-projects__row">
            <ProjectCard post={{
              title:'Some Project',
              description:'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula.',
            }} />
            <ProjectCard post={{
              title:'Some Project',
              description:'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula.',
            }} />
            <ProjectCard post={{
              title:'Some Project',
              description:'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula.',
            }} />
          </div>
          <div className="bpn-projects__row">
            <ProjectCard post={{
              title:'Some Project',
              description:'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula.',
            }} />
            <ProjectCard post={{
              title:'Some Project',
              description:'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula.',
            }} />
            <ProjectCard post={{
              title:'Some Project',
              description:'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula.',
            }} />
          </div>
          <div className="bpn-projects__row">
            <ProjectCard post={{
              title:'Some Project',
              description:'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula.',
            }} />
            <ProjectCard post={{
              title:'Some Project',
              description:'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula.',
            }} />
            <ProjectCard post={{
              title:'Some Project',
              description:'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula.',
            }} />
          </div>
        </div>
        <div className="bpn-section__title-button">
          <Button label="Github" onClick={()=>this.toggle()} />
        </div>
      </div>
    )
  }
}

export default Projects;
