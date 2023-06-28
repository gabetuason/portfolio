// Import the necessary dependencies
import React from 'react';
import Project from "../WorkPortfolio";
import '../../styles/Projects.css';


// Define and export the Projects component
export default function Projects() {
  const workPortfolio = [   // Define an array of project objects
    {
      projectName: 'Happily Ever Prints',
      image: './assets/happily.JPG',
      deployedUrl: 'https://radiant-island-05643.herokuapp.com/',
      githubLink: 'https://github.com/weddingprintproj3/HappilyEverPrints'
    },
    {
      projectName: 'Text Editor',
      image: './assets/textEditor.JPG',
      deployedUrl: 'https://boiling-shore-14986.herokuapp.com/',
      githubLink: 'https://github.com/gabetuason/text_editor_PWA'
    },
    {
      projectName: 'Tech Blog',
      image: './assets/techBlog.jpg',
      deployedUrl: 'https://peaceful-oasis-34260.herokuapp.com/',
      githubLink: 'https://github.com/gabetuason/tech_blog'
    },
    {
      projectName: 'Weather Dashboard API',
      image: './assets/weatherDash.PNG',
      deployedUrl: 'https://gabetuason.github.io/weather_dashboard/',
      githubLink: 'https://github.com/gabetuason/weather_dashboard'
    },
    {
      projectName: 'Work Day Scheduler',
      image: './assets/workScheduler.PNG',
      deployedUrl: 'https://gabetuason.github.io/work_day_scheduler/',
      githubLink: 'https://github.com/gabetuason/work_day_scheduler'
    },
    {
      projectName: 'Audio News',
      image: './assets/audioNews.PNG',
      deployedUrl: 'https://audio-news.github.io/audio-news/',
      githubLink: 'https://github.com/audio-news/audio-news'
    },
    {
      projectName: 'Share camGear',
      image: './assets/sharecamGear.JPG',
      deployedUrl: 'https://guarded-reaches-91931.herokuapp.com/',
      githubLink: 'https://github.com/proj2team5/rent_my_stuff'
    }
  ];

return ( // .map() is used to iterate over the workPortfolio array, which contains project objects.
  <section id="projects" className="container">
    <h2 className="text-center mb-5">Projects</h2>
    <p className="note">Note: Some of the deployed links are under maintenance</p>
    <p className="note">Throughout my journey, I have had the privilege of working on numerous projects, both independently and as part of collaborative teams. These projects span various domains and technologies, showcasing my versatility as a developer. I take pride in delivering fully functional and dynamic solutions that meet the unique requirements of each project. From web applications to mobile apps, I have honed my skills in creating intuitive user interfaces, implementing robust backend systems.</p>
      <div className="image-container">
        <img
          src="./assets/projectPhoto.PNG"
          alt="Project"
          className="project-image"
          style={{ width: '80%' }}
        />
      </div> 
    <div id="projectContainer">
      {workPortfolio.map((project, index) => (// Render a Project component for each project in the array
        <Project
          key={index}
          project={project.projectName}
          image={project.image}
          deployedUrl={project.deployedUrl}
          githubLink={project.githubLink}
        />
      ))}     
    </div>
  </section>
);
}
