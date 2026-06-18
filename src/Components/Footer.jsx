import React from "react";
import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="mailto:nanigudivaka0804@gmail.com">
          <img src="footer-gmail.png"
            alt="Gmail"
            width="30"
            height="30"
            border-radius="25px"
          />
        </a>
        <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank">
          <img src="footer-linkedin.png"
            alt="LinkedIn"
            width="30"
            height="30"
            border-radius="25px"
          />
        </a>
        <a href="https://github.com/YOUR_GITHUB" target="_blank">
          <img src="footer-git.png"
            alt="GitHub"
            width="30"
            height="30"
          />
        </a>
        <a href="/resume.pdf" download>📄</a>
      </div>

      <p>© 2026 Nani Gudivaka</p>
    </footer>
  );
};

export default Footer;