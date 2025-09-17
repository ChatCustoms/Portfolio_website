import Projects from "./sections/Projects";
import "./App.css";
import About from "./sections/About";

function App() {
  return (
    <main className="App">
      <h1>Stephano Chatham</h1>
      <h2>Full Stack Developer | Veteran | Additive manufacturing expert</h2>
      <a href="https://www.linkedin.com/in/stephanochatham/" target="_blank">
        LinkedIn
      </a>
      <a href="#projects">View my projects</a>
      <Projects />
      <About />
    </main>
  );
}

export default App;
