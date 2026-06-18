import React, { useEffect, useState } from "react";
import '../styles/hero.css';


const roles = ["Full Stack", "React", "JavaScript"];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="hero" className="hero hero-section">
      <h1>Hi, I'm Nani 👋</h1>

      <h2 className="hero-title">
        I am <span className="highlight">{text}</span>Developer
      </h2>

      <p>Frontend & Full Stack Developer with 2.1 years of software industry experience, building modern and responsive web applications using <br></br>React, Node.js, and MySQL.</p>

      <div className="hero-buttons">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=nanigudivaka0804@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn primary"
        >
          Email Me
        </a>

        <a href="/resume.pdf" download className="btn secondary">
          Download Resume
        </a>
      </div>
      <div className="social-buttons">
        <a
          href="https://linkedin.com/in/gudivaka-nani"
          target="_blank"
          rel="noopener noreferrer"
          className="btn social-btn"
        >
          <img
            src="./linkedin.png"
            alt="LinkedIn"
            width="30"
            height="30"
          />
        </a>

        <a
          href="https://github.com/NaniGudivaka"
          target="_blank"
          rel="noopener noreferrer"
          className="btn social-btn"
        >
            <img
            src="./github.png"
            alt="GitHub"
            width="30"
            height="30"
          />

        </a>

        <a
          href="https://vercel.com/nanigudivakas-projects"
          target="_blank"
          rel="noopener noreferrer"
          className="btn social-btn"
        >
            <img
            src="./vercel.png"
            alt="Vercel"
            width="30"
            height="30"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;