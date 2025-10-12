import Page from "../../app/Page";
import background from "../../assets/About_background.png";
import "./about.css";

export default function About() {
  return (
    <Page bg={background} overlay="rgba(6,10,16,0.55)">
      <div className="page-content">
        <h2>About Me</h2>
        <p>
          A brief introduction to who I am, my background, and what drives me as
          a software developer.
        </p>
        <section id="about" className="about">
          <h2>About Me</h2>
          <p>
            Hello! I'm Stephano Chatham, a passionate software developer with a
            knack for creating innovative solutions. With a background in
            full-stack development and a love for coding, I enjoy tackling
            complex problems and turning ideas into reality. When I'm not
            coding, you can find me exploring new technologies, contributing to
            open-source projects, or indulging in my love for 3d printing.
          </p>
        </section>
      </div>
    </Page>
  );
}
