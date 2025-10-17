import Page from "../../app/Page";
import background from "../../../public/images/Contact_background.png";
import "./contact.css";

export default function Contact() {
  return (
    <Page bg={background} overlay="rgba(6,10,16,0.2)">
      <div className="page-content">
        <section id="contact" className="contact">
          <div className="contact-header">
            <h2>Let's Connect</h2>
            <p className="contact-subtitle">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="availability-badge">
              <span className="status-dot"></span>
              Available for opportunities
            </div>
          </div>

          <div className="contact-cards">
            <a
              href="mailto:stephano.chatham@gmail.com"
              className="contact-card"
            >
              <div className="contact-icon email-icon">
                <span>✉️</span>
              </div>
              <h3>Email</h3>
              <p className="contact-detail">stephano.chatham@gmail.com</p>
              <span className="contact-cta">Send a message →</span>
            </a>

            <a
              href="https://www.linkedin.com/in/stephano-c"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon linkedin-icon">
                <span>💼</span>
              </div>
              <h3>LinkedIn</h3>
              <p className="contact-detail">Connect with me</p>
              <span className="contact-cta">View profile →</span>
            </a>

            <a
              href="https://github.com/stephanochatham"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon github-icon">
                <span>💻</span>
              </div>
              <h3>GitHub</h3>
              <p className="contact-detail">Check out my code</p>
              <span className="contact-cta">View repos →</span>
            </a>
          </div>

          <div className="contact-footer">
            <p>📍 Based in [Your Location]</p>
            <p>⏰ Typically respond within 24 hours</p>
          </div>
        </section>
      </div>
    </Page>
  );
}
