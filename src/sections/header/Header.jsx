import "./header.css";

export default function Header() {
  return (
    <header className="hero">
      <div className="hero-inner container">
        <div className="hero-badge">Frontend Developer</div>
        <h1 className="hero-title">
          Hi, I’m Stephano. I build clean, fast UIs.
        </h1>
        <p className="hero-subtitle">
          React + TypeScript • Vite • UI engineering with a maker’s mindset.
        </p>
        <div className="hero-actions">
          <a className="button" href="/projects">
            View Projects
          </a>
          <a className="button-ghost" href="/about">
            About Me
          </a>
        </div>
      </div>
    </header>
  );
}
