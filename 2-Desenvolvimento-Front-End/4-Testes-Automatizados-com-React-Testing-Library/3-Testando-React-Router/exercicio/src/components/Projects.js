import { Component } from 'react';
import { Link } from 'react-router-dom';
import projectsList from './Projects-list';

class Projects extends Component {
  render() {
    return (
      <div id='projects-container' data-testid='projects-container'>
        <div>
          {projectsList.map((project) => (
            <figure key={project.id}>
              <Link to={`/project/${project.id}`}>
                <p>{project.name}</p>
              </Link>
            </figure>
          ))}
        </div>
      </div >
    );
  }
}

export default Projects;
