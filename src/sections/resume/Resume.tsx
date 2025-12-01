import Page from "../../app/Page";
import background from "../../../public/images/About_background.png";
import "./resume.css";

export default function Resume() {
  return (
    <Page bg={background} overlay="rgba(6,10,16,0.2)">
      <div className="page-content">
        <section id="resume" className="resume">
          {/* Header Section */}
          <div className="resume-header">
            <h1>Stephano Chatham</h1>
            <p className="resume-tagline">
              TS-Cleared Technical Engineer | Additive Manufacturing • Systems Engineering • Weapons & Forensics SME
            </p>
            <p className="resume-location">U.S. Marine Veteran | Orlando Area</p>
          </div>

          {/* Download Buttons */}
          <div className="resume-downloads">
            <a href="/public/docs/Stephano_Chatham_Resume_2025.pdf" download className="download-btn">
              Download Resume (PDF)
            </a>
            <a href="/public/docs/Stephano_Chatham_Resume_2025.docx" download className="download-btn">
              Download Resume (DOCX)
            </a>
          </div>

          {/* Professional Summary */}
          <div className="resume-section">
            <h2>Professional Summary</h2>
            <p>
              TS-Cleared Technical Engineer and former FBI Physical Scientist with extensive experience in weapons systems examination, additive manufacturing support, forensic engineering workflows, and electromechanical troubleshooting. Known for precision, disciplined execution, and mission-focused performance with expertise supporting complex federal laboratory environments.
            </p>
          </div>

          {/* Key Capabilities */}
          <div className="resume-section">
            <h2>Key Capabilities</h2>
            <div className="capabilities-grid">
              <div className="capability-item">Additive Manufacturing (FDM/SLA)</div>
              <div className="capability-item">CAD: Fusion360, SolidWorks, Creo</div>
              <div className="capability-item">Weapons & Ballistics SME (trajectory, toolmarks, bullet-to-barrel)</div>
              <div className="capability-item">Electromechanical Systems Troubleshooting</div>
              <div className="capability-item">Technical Documentation & Federal Compliance</div>
              <div className="capability-item">Chain-of-Custody & Lab Integrity Protocols</div>
              <div className="capability-item">Measurement & Instrumentation</div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-section">
            <h2>Experience</h2>
            <div className="experience-content">
              <p className="section-note">
                Add your detailed work experience here, including:
              </p>
              <ul>
                <li>Job titles and company names</li>
                <li>Employment dates</li>
                <li>Key responsibilities and achievements</li>
                <li>Relevant projects and technologies used</li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="resume-section">
            <h2>Education</h2>
            <div className="education-content">
              <p className="section-note">
                Add your educational background here, including:
              </p>
              <ul>
                <li>Degree(s) and field(s) of study</li>
                <li>Institution names</li>
                <li>Graduation dates</li>
                <li>Relevant coursework or honors</li>
              </ul>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="resume-section">
            <h2>Certifications</h2>
            <div className="certifications-content">
              <p className="section-note">
                Add your certifications here, such as:
              </p>
              <ul>
                <li>TS Clearance</li>
                <li>Technical certifications</li>
                <li>Professional licenses</li>
                <li>Training completions</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="resume-section">
            <h2>Technical Skills</h2>
            <div className="skills-content">
              <div className="skill-category">
                <h3>Software Development</h3>
                <p>React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Prisma, GraphQL, Tailwind CSS</p>
              </div>
              <div className="skill-category">
                <h3>Engineering & Manufacturing</h3>
                <p>Additive Manufacturing (FDM/SLA), CAD (Fusion360, SolidWorks, Creo), 3D Printing, Mechanical Design</p>
              </div>
              <div className="skill-category">
                <h3>Specialized Expertise</h3>
                <p>Weapons Systems, Ballistics Analysis, Forensic Engineering, Electromechanical Systems</p>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="resume-section">
            <h2>Portfolio Projects</h2>
            <div className="projects-list">
              <div className="project-item">
                <h3>Magic Pin Trader</h3>
                <p>A full-stack web application for cataloging, valuing, and trading Disney pins. Built with Next.js 15, TypeScript, PostgreSQL, and Prisma.</p>
                <div className="project-links-resume">
                  <a href="https://github.com/ChatCustoms/MagicPinTrader" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://magicpintrader.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>
              <div className="project-item">
                <h3>Tonya Larsh Realty</h3>
                <p>Modern luxury real estate website with Keystone 6 CMS. Built with Next.js 14, TypeScript, PostgreSQL, and GraphQL.</p>
                <div className="project-links-resume">
                  <a href="https://github.com/ChatCustoms/TonyaJaneLarsh" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://new.tonyalarshrealtor.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>
              <div className="project-item">
                <h3>WTWR (What to Wear)</h3>
                <p>An application that suggests outfits based on weather forecasts. Built with React, Node.js, Express, and MongoDB.</p>
                <div className="project-links-resume">
                  <a href="https://github.com/stephanochatham/se_project_express" target="_blank" rel="noopener noreferrer">Backend</a>
                  <a href="https://github.com/stephanochatham/se_project_react" target="_blank" rel="noopener noreferrer">Frontend</a>
                </div>
              </div>
              <div className="project-item">
                <h3>3D Model Finder</h3>
                <p>A web application that helps users find 3D models from Thingiverse repositories. Built with React and API Integration.</p>
                <div className="project-links-resume">
                  <a href="https://github.com/stephanochatham/se_project_react" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="resume-section">
            <h2>Contact</h2>
            <div className="contact-info">
              <p><strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a></p>
              <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
              <p><strong>GitHub:</strong> <a href="https://github.com/stephanochatham" target="_blank" rel="noopener noreferrer">github.com/stephanochatham</a></p>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
}
