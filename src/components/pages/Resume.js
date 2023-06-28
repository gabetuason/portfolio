// Import the necessary dependencies
import React from 'react';
import '../../styles/Resume.css';


// Define and export the Resume component
export default function Resume() {
  return (
    <section id="resumeContainer" className="resume-section">
      <h1 className="text-center mb-5">Resume</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Front-end Proficiencies</h2>
          <ul className="list-group">
            <li className="list-group-item">HTML</li>
            <li className="list-group-item">CSS</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">jQuery</li>
            <li className="list-group-item">Responsive design</li>
            <li className="list-group-item">React</li>
            <li className="list-group-item">Bootstrap/Tailwind/Bulma</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Back-end Proficiencies</h2>
          <ul className="list-group">
            <li className="list-group-item">APIs</li>
            <li className="list-group-item">Node.js</li>
            <li className="list-group-item">Express.js</li>
            <li className="list-group-item">MySQL, Sequelize</li>
            <li className="list-group-item">MongoDB, Mongoose</li>
            <li className="list-group-item">REST</li>
            <li className="list-group-item">GraphQL</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <a href="./Gabe_Resume.pdf" download className="btn btn-primary glow-button">Click to download resume</a>
      </div>
    </section>
  );
}
