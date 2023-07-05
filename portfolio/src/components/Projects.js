import React from 'react';
import '../styles/Projects.css'

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3 className="project-title">Project 1</h3>
        <p className="project-description">...</p>
      </div>
      <div className="project">
        <h3 className="project-title">Project 2</h3>
        <p className="project-description">...</p>
      </div>
      {/* Add more projects */}
    </div>
  );
}

export default Projects;

