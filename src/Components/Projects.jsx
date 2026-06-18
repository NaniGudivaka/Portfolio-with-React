import React from "react";
import "../styles/project.css"
const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>E-Commerce Web Application</h3>
        <p>
          Built a shopping application with product listing, cart management,
          and order simulation using HTML, CSS, JavaScript.
        </p>
      </div>

      <div className="project-card">
        <h3>Authentication System</h3>
        <p>
          Developed Login & Signup functionality using Node.js, Express,
          JWT authentication, bcrypt password hashing, and MySQL.
        </p>
      </div>

      <div className="project-card">
        <h3>Todo Application</h3>
        <p>
          Created a responsive Todo App with CRUD operations, local storage,
          search functionality, and task completion tracking.
        </p>
      </div>

      <div className="project-card">
        <h3>Lottery Game</h3>
        <p>
          Interactive React application demonstrating state management,
          random number generation, and user interaction.
        </p>
      </div>

      <div className="project-card">
        <h3>Calculator Application</h3>
        <p>
          Built a calculator using HTML, CSS, and JavaScript to perform
          arithmetic operations with responsive UI.
        </p>
      </div>
    </section>
  );
};

export default Projects;