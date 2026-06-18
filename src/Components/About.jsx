import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="header-section">About Me</h2>

      <p className="about-text">
        Full Stack Developer with <strong>2.1 years</strong> of software
        industry experience. Experienced in Oracle CC&B and Integrations,
        currently focused on building modern web applications using React,
        Node.js, Express.js, and MySQL.
      </p>

      <div className="about-highlights">
        <div className="highlight-card">
          <h3>2+</h3>
          <p>Years Experience</p>
        </div>

        <div className="highlight-card">
          <h3>10+</h3>
          <p>Projects Built</p>
        </div>

        <div className="highlight-card">
          <h3>Full Stack</h3>
          <p>React & Node.js</p>
        </div>
      </div>

      <h3 className="skills-title">Tech Stack</h3>

      <div className="skills">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
      </div>
    </section>
  );
};

export default About;