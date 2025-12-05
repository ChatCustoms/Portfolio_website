import Page from "../../app/Page";
import background from "../../../public/images/About_background.png";
import "./about.css";

export default function About() {
  return (
    <Page bg={background} overlay="rgba(6,10,16,0.2)">
      <div className="page-content">
        <section id="about" className="about">
          <h2>About Me</h2>

          <div className="about-intro">
            <p>
              Hello! I'm Stephano Chatham, a TS-Cleared Technical Engineer and former FBI Physical Scientist
              transitioning into full-stack software development. With extensive experience in weapons systems
              analysis, forensic engineering, additive manufacturing, and electromechanical troubleshooting,
              I bring a unique blend of precision engineering and mission-focused execution to software development.
              As a U.S. Marine veteran with a strong mechanical/electrical foundation, I excel at tackling complex
              technical challenges and building innovative solutions that blend engineering expertise with modern
              web technologies.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">7</div>
              <div className="stat-label">Years FBI Laboratory</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">TS</div>
              <div className="stat-label">Security Clearance</div>
            </div>
          </div>

          <div className="skills-section">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-icon">⚛️</div>
                <div className="skill-name">React</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">📜</div>
                <div className="skill-name">TypeScript</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">▲</div>
                <div className="skill-name">Next.js</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🟢</div>
                <div className="skill-name">Node.js</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🚂</div>
                <div className="skill-name">Express</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🗄️</div>
                <div className="skill-name">MongoDB</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🐘</div>
                <div className="skill-name">PostgreSQL</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🔷</div>
                <div className="skill-name">Prisma</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🔺</div>
                <div className="skill-name">GraphQL</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🎨</div>
                <div className="skill-name">Tailwind CSS</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">💅</div>
                <div className="skill-name">CSS3</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🔧</div>
                <div className="skill-name">Git</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🖨️</div>
                <div className="skill-name">3D Printing</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">⚡</div>
                <div className="skill-name">REST APIs</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🔧</div>
                <div className="skill-name">CAD (Fusion360)</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🎯</div>
                <div className="skill-name">Ballistics Analysis</div>
              </div>
            </div>
          </div>

          <div className="fun-facts">
            <h3>Background & Interests</h3>
            <ul>
              <li>
                🎖️ U.S. Marine Corps veteran with honors - Expeditionary Airfield Systems Specialist
              </li>
              <li>🔬 Former FBI Physical Scientist specializing in firearms & ballistics forensics</li>
              <li>🛠️ Master Gunsmith with expertise in weapons systems and precision measurement</li>
              <li>🖨️ Additive manufacturing enthusiast - 3D printing custom engineering solutions</li>
              <li>⚙️ Electrical Engineering Technology degree with Mechatronics concentration</li>
              <li>💻 Transitioning technical expertise into full-stack software development</li>
            </ul>
          </div>
        </section>
      </div>
    </Page>
  );
}
