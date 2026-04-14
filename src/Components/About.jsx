import React from 'react'
import '../styles/about.css';

const About = () => {
  return (
    <section id="about" className="about">

      <h2 className="header-section">About Me</h2>

      <p className="about-text">
        I am a frontend developer skilled in HTML, CSS, JavaScript and React.
        I build clean and responsive web applications.
      </p>

      <h3 className="skills-title">Skills</h3>
<div className="skills">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="js" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" />
</div>

    </section>
  )
}

export default About