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
              Hello! I'm Stephano Chatham, a passionate software developer with a
              knack for creating innovative solutions. With a background in
              full-stack development and a love for coding, I enjoy tackling
              complex problems and turning ideas into reality. When I'm not
              coding, you can find me exploring new technologies, contributing to
              open-source projects, or indulging in my love for 3D printing.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">∞</div>
              <div className="stat-label">Cups of Coffee</div>
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
                <div className="skill-icon">🟢</div>
                <div className="skill-name">Node.js</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🗄️</div>
                <div className="skill-name">MongoDB</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🎨</div>
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
            </div>
          </div>

          <div className="fun-facts">
            <h3>Fun Facts</h3>
            <ul>
              <li>🎯 Passionate about turning complex problems into elegant solutions</li>
              <li>🚀 Always learning new technologies and frameworks</li>
              <li>🤝 Love collaborating on open-source projects</li>
              <li>🎨 Enjoy the intersection of design and functionality</li>
            </ul>
          </div>
        </section>
      </div>
    </Page>
  );
}
