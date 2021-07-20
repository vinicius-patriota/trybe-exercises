import { Component } from 'react';
import NotFound from './NotFound';
import projectsList from './Projects-list';

class Project extends Component {
  render() {
    const { id } = this.props.match.params;
    if (projectsList.every((project) => project.id !== id)) return <NotFound />
    const project = projectsList.filter((project) => project.id === id);
    return (
      <div id='project-container' data-testid='project-container'>
        <h1>{project[0].name}</h1>
        <img src={project[0].img} alt="project sprite"/>
        <p>{project[0].description}</p>
      </div>
    );
  }
}

export default Project;