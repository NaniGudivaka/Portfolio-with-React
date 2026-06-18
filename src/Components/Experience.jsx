import React from 'react';
import "../styles/experience.css"

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      <div className="exp-card">
        <h3>Software Engineer</h3>
        <p>Oracle CC&B & Integrations</p>
        <p>2.1 Years Experience</p>

        <ul>
          <li>Worked on Oracle CC&B implementation and support projects.</li>
          <li>Developed and maintained Oracle Integration solutions.</li>
          <li>Collaborated with cross-functional teams to deliver business requirements.</li>
          <li>Analyzed and resolved production issues to ensure system reliability.</li>
          <li>Currently transitioning into Full Stack Development with React, Node.js, and MySQL.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;