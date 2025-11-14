import Page from "../../app/Page";
import background from "../../../public/images/Projects_background.png";
import "./projects.css";

export default function Projects() {
  return (
    <Page bg={background} overlay="rgba(6,10,16,0.2)">
      <div className="page-content">
        <section id="projects" className="projects">
          <h2>Projects</h2>
          <p>
            A showcase of my engineering and software projects, blending
            mechanical design, additive manufacturing, and full-stack development.
          </p>
          <ul>
            <li>
              <h3>3D Model Finder</h3>
              <p>
                A web application that helps users find 3D models from the
                Thingiverse repositories.
              </p>
              <div className="project-meta">
                <span className="project-tag">React</span>
                <span className="project-tag">API Integration</span>
                <span className="project-tag">CSS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/stephanochatham/se_project_react" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
              </div>
            </li>
            <li>
              <h3>WTWR (What to wear)</h3>
              <p>
                An application that suggests outfits based on the weather
                forecast.
              </p>
              <div className="project-meta">
                <span className="project-tag">React</span>
                <span className="project-tag">Node.js</span>
                <span className="project-tag">Express</span>
                <span className="project-tag">MongoDB</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/stephanochatham/se_project_express" target="_blank" rel="noopener noreferrer" className="project-link">Backend Repo</a>
                <a href="https://github.com/stephanochatham/se_project_react" target="_blank" rel="noopener noreferrer" className="project-link">Frontend Repo</a>
              </div>
            </li>
            <li>
              <h3>Spots</h3>
              <p>React project for sharing posts with like functionality.</p>
              <div className="project-meta">
                <span className="project-tag">React</span>
                <span className="project-tag">JavaScript</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/stephanochatham" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
              </div>
            </li>
            <li>
              <h3>Magic Pin Trader</h3>
              <p>
                A full-stack web application for cataloging, valuing, and trading Disney pins. Connect with collectors worldwide, track your collection, and discover rare pins.
              </p>
              <div className="project-meta">
                <span className="project-tag">Next.js 15</span>
                <span className="project-tag">TypeScript</span>
                <span className="project-tag">PostgreSQL</span>
                <span className="project-tag">Prisma</span>
                <span className="project-tag">NextAuth</span>
                <span className="project-tag">Tailwind CSS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/ChatCustoms/MagicPinTrader" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
                <a href="https://magicpintrader.com" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
              </div>
            </li>
            <li>
              <h3>Tonya Larsh Realty</h3>
              <p>
                Modern luxury real estate website featuring property listings, community showcases, and a powerful Keystone 6 CMS. Professional platform for showcasing premium properties.
              </p>
              <div className="project-meta">
                <span className="project-tag">Next.js 14</span>
                <span className="project-tag">TypeScript</span>
                <span className="project-tag">Keystone 6</span>
                <span className="project-tag">PostgreSQL</span>
                <span className="project-tag">GraphQL</span>
                <span className="project-tag">Tailwind CSS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/ChatCustoms/TonyaJaneLarsh" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
                <a href="https://new.tonyalarshrealtor.com" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </Page>
  );
}
