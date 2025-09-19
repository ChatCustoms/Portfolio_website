import Projects from "../sections/projects/Projects";
import "./App.css";
import About from "../sections/about/About";
import Header from "../sections/header/Header";
import Contact from "../sections/contact/Contact";

function App() {
  return (
    <>
    <Header />
    <main className="App">
      <h1>Stephano Chatham</h1>
      <h2>Full Stack Developer | Veteran | Additive manufacturing expert</h2>
      <a href="https://www.linkedin.com/in/stephanochatham/" target="_blank">
        LinkedIn
      </a>
      <a href="#projects">View my projects</a>
      <Projects />
      <About />
      <Contact />
    </main>
    </>
  );
}

export default App;
