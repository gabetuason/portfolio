// This is the Project component that represents an individual project in the Projects section
// It imports the required dependencies and the CSS file for styling

import React from 'react';
import '../styles/Projects.css';

// The Project component is a functional component that takes four props: project, image, deployedUrl, and githubLink
function Project({ project, image, deployedUrl, githubLink }) {
  return (
    <figure>
      <img className="projectImage" src={image} alt={project} />
      <div className="button-container">
        <a href={githubLink}>
          <button className="glow-button">GitHub</button>
        </a>
        <a href={deployedUrl}>
          <button className="glow-button">Deployed URL</button>
        </a>
      </div>
      <figcaption className="project-caption">{project}</figcaption>
    </figure>
  );
}
// exports to work.js
export default Project;
