import React, { useEffect, useState } from "react";
import '../styles/hero.css'

const roles = ["Frontend", "React", "JavaScript"];

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
    <section className="hero">
      <h1>Hi, I'm Nani 👋</h1>

      <h2 className="hero-title">
        I am <span className="highlight">{text}</span>Developer
      </h2>

      <p>I will update this latter</p>

      <div className="hero-buttons">
        <a href="nanigudivaka0804@gmail.com" className="btn primary">
          Email Me
        </a>

        <a href="/resume.pdf" download className="btn secondary">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;