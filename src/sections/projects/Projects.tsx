import Page from "../../app/Page";
import background from "../../assets/Projects_background.png";
import "./projects.css";

export default function Projects() {
  return (
    <Page bg={background} overlay="rgba(6,10,16,0.2)">
      <div className="page-content">
        <h2>Projects</h2>
        <p>
          A showcase of my engineering and software projects, blending
          mechanical design, additive manufacturing, and full-stack development.
        </p>
        <section id="projects" className="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>3D Model Finder</h3>
              <p>
                A web application that helps users find 3D models from the
                Thingiverse repositorie.
              </p>
            </li>
            <li>
              <h3>WTWR (What to wear)</h3>
              <p>
                An application that suggests outfits based on the weather
                forecast.
              </p>
            </li>
            <li>
              <h3>Spots</h3>
              <p>React project for sharing posts with like functionality.</p>
            </li>
          </ul>
        </section>
      </div>
    </Page>
  );
}
