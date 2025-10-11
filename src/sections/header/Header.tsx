import type { JSX } from "react";
import { Link } from "react-router-dom";

import "./header.css";

export default function Header(): JSX.Element {
  return (
    <header className="hero">
      <div className="hero-inner container">
        <div className="hero-badge">Software Developer</div>
        <h1 className="hero-title">
          Hi, I’m Stephano. I build clean, user friendly websites.
        </h1>
        <p className="hero-subtitle">
          React + TypeScript • Vite • UI engineering with a maker’s mindset.
        </p>
        <div className="hero-actions">
          <Link className="button" to="/projects">
            View Projects
          </Link>
          <Link className="button" to="/about">
            About Me
          </Link>
        </div>
      </div>
    </header>
  );
}
