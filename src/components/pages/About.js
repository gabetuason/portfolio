// Import the necessary dependencies
import React from 'react';
import '../../styles/About.css';

// Define and export the About component
export default function About() {
  return (
    <section id="aboutPage">
      <div className="heroBanner">
        <img
          src="./assets/banner.PNG"
          alt="banner"
          className="bannerImg"
        />
        <h1 className="text-center heroText">Welcome to My Portfolio</h1>
      </div>
      <h2 className="text-center mt-3 mb-5">About Me</h2>
      <div className="aboutContainer">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  src="./assets/ProfileAvatar.jpg"
                  alt="profileAvatar"
                  className="img-fluid mb-3"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              <div className="col-md-6">
                <article className="description">
                  <p>
                    Hello, I'm Gabriel Tuason, a motivated individual with a passion for continuous learning. I graduated from Ryerson University's business tech program where I earned my bachelor's degree in commerce. During my studies, I was honored to be part of the dean's list and also completed a minor in Economics. Alongside my academic journey, I delved into the world of photography and videography, providing my services as a freelance photographer for various occasions such as meetups, business ads, and weddings. This creative outlet allowed me to explore my artistic side and capture special moments for my clients.<br /><br />
                    Currently, my focus has shifted towards becoming a full stack web developer. I am dedicated to expanding my skill set and deepening my knowledge in both front-end and back-end technologies. I am working on projects that involve the MERN stack, which is simply MongoDB, Express, React, and Node.js.<br /><br />
                    Additionally, I am familiar with using GraphQL, Postman, and MongoDB Compass as part of my development workflow. Driven by my curiosity and passion for technology, I am always seeking new opportunities to grow and improve. I embrace challenges and look forward to leveraging my business and technical background.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
