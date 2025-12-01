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
            <p className="resume-location">Altamonte Springs, FL</p>
            <p className="resume-contact">
              <a href="https://stephanochatham.com">https://stephanochatham.com</a> • U.S. Marine Veteran
            </p>
          </div>

          {/* Download Buttons */}
          <div className="resume-downloads">
            <a href="/docs/Stephano_Chatham_Resume_2025.pdf" download className="download-btn">
              Download Resume (PDF)
            </a>
            <a href="/docs/Stephano_Chatham_Resume_2025.docx" download className="download-btn">
              Download Resume (DOCX)
            </a>
          </div>

          {/* Highlighted Strengths */}
          <div className="resume-section">
            <h2>Highlighted Strengths</h2>
            <ul className="strengths-list">
              <li>Additive Manufacturing (FDM/SLA), CAD Modeling, Engineering Support</li>
              <li>Weapons & Ballistics SME: Trajectory Reconstruction, Bullet-to-Barrel Analysis, Toolmarks</li>
              <li>Systems Engineering: Diagnostics, Electromechanical Systems Support</li>
              <li>Federal Technical Documentation, Chain-of-Custody Compliance, Precision Measurement</li>
            </ul>
          </div>

          {/* Professional Summary */}
          <div className="resume-section">
            <h2>Professional Summary</h2>
            <p>
              TS-Cleared Technical Engineer and former FBI Physical Scientist with extensive experience in weapons systems analysis, forensic engineering workflows, additive manufacturing support, and electromechanical troubleshooting. Served as a subject-matter expert in ballistics, toolmarks, and trajectory reconstruction, supporting high-visibility federal cases and laboratory research. Strong mechanical/electrical foundation paired with disciplined execution and mission-focused performance as a U.S. Marine veteran.
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

            <div className="job-entry">
              <div className="job-header">
                <h3>Physical Scientist – Firearms & Toolmarks Unit (GS-12)</h3>
                <p className="job-location">Federal Bureau of Investigation (FBI Laboratory), Quantico, VA</p>
                <p className="job-dates">Nov 2018 – Sep 2025</p>
              </div>
              <ul className="job-responsibilities">
                <li>Served as a Weapons & Ballistics SME, supporting national-level forensic investigations and federal evidential needs</li>
                <li>Conducted bullet-to-barrel comparisons, toolmark examinations, and trajectory reconstructions for complex shooting events</li>
                <li>Supported additive manufacturing activities by producing non-classified 3D-printed components under stringent laboratory quality controls</li>
                <li>Performed instrumentation measurement, documentation, and controlled testing tasks to support scientific evaluations</li>
                <li>Authored detailed forensic and technical documents used in federal reporting and internal laboratory processes</li>
                <li>Collaborated with examiners, engineers, and field units to improve analytical processes, documentation clarity, and workflow efficiency</li>
                <li>Ensured strict adherence to evidence handling, chain-of-custody requirements, and federal laboratory standards</li>
              </ul>
            </div>

            <div className="job-entry">
              <div className="job-header">
                <h3>Expeditionary Airfield Systems Specialist (7011)</h3>
                <p className="job-location">U.S. Marine Corps</p>
                <p className="job-dates">2012 – 2014</p>
              </div>
              <ul className="job-responsibilities">
                <li>Installed, maintained, and inspected expeditionary airfield systems including lighting, power distribution, and arresting gear</li>
                <li>Conducted electrical and mechanical troubleshooting in field conditions to support rapid operational readiness</li>
                <li>Performed corrective and preventive maintenance aligned with military safety and technical standards</li>
                <li>Honorably discharged following medical review; recognized for reliability, technical competence, and precision</li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="resume-section">
            <h2>Education</h2>

            <div className="education-entry">
              <h3>B.S., Electrical Engineering Technology (Mechatronics Concentration)</h3>
              <p className="education-institution">ECPI University</p>
              <p className="education-year">2018</p>
            </div>

            <div className="education-entry">
              <h3>A.S., Electrical Engineering Technology</h3>
              <p className="education-institution">ECPI University</p>
              <p className="education-year">2017</p>
            </div>

            <div className="education-entry">
              <h3>TripleTen Engineering Program (Full-stack Software Engineering)</h3>
              <p className="education-year">2024–2025</p>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="resume-section">
            <h2>Certifications</h2>
            <ul className="certifications-list">
              <li>Master Gunsmith – American Gunsmithing Institute (AGI)</li>
              <li>M16/M4 Armorer – AGI</li>
              <li>1911 Armorer – AGI</li>
              <li>Glock Certified Armorer – Glock</li>
              <li>Firearms Technology Certification – Sonoran Desert Institute</li>
              <li>Cowboy Action Armorer – AGI</li>
              <li>FBI Specialized Firearms & Toolmarks Unit Training</li>
            </ul>
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
              <p><strong>Email:</strong> <a href="mailto:stephano.chatham@gmail.com">stephano.chatham@gmail.com</a></p>
              <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/stephano-c" target="_blank" rel="noopener noreferrer">linkedin.com/in/stephano-c</a></p>
              <p><strong>GitHub:</strong> <a href="https://github.com/stephanochatham" target="_blank" rel="noopener noreferrer">github.com/stephanochatham</a></p>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
}
