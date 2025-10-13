import Page from "../../app/Page";
import background from "../../assets/Contact_background.png";
import "./contact.css";

export default function Contact() {
  return (
    <Page bg={background} overlay="rgba(6,10,16,0.2)">
      <div className="page-content">
        <section id="contact" className="contact">
          <h2>Contact Me</h2>
          <p>
            If you'd like to get in touch, please reach out via LinkedIn or
            email.
          </p>
          <a className="email" href="mailto:stephano.chatham@gmail.com">Email Me</a>
          <a className="linkedin"
            href="www.linkedin.com/in/stephano-c"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

        </section>
      </div>
    </Page>
  );
}
