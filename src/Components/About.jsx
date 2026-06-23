import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="header-section">About Me</h2>

      <p className="about-text">
        I am a Software Engineer with 2.1 years of IT experience, currently transitioning into JavaScript Full Stack Development with a strong focus on React.js, Node.js, and SQL.
I have hands-on experience building frontend and full-stack projects using React.js, JavaScript, Node.js, Express.js, and MySQL. I enjoy creating responsive user interfaces, developing backend APIs, and continuously improving my problem-solving and development skills 
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