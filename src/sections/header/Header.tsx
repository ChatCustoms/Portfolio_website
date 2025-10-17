import { Link } from "react-router-dom";

import "./header.css";
import Page from "../../app/Page";
import background from "../../../public/images/Home_background.png";

export default function Header() {
  return (
    <Page bg={background} overlay="rgba(6,10,16,0.2)">
      <div className="page-content">
        <header className="hero">
          <div className="hero-inner container">
            <div className="hero-badge">Software Developer</div>
            <h1 className="hero-title">
              Hi, I’m Stephano. I build clean, user friendly websites.
            </h1>
            <p className="hero-subtitle">
              React + TypeScript • Javascript • Vite • UI engineering with a maker’s mindset.
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
      </div>
    </Page>
  );
}
