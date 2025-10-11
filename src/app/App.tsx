import type { JSX } from "react";

import Projects from "../sections/projects/Projects";
import "./App.css";
import About from "../sections/about/About";
import Header from "../sections/header/Header";
import Contact from "../sections/contact/Contact";

export default function App(): JSX.Element {
  return (
    <>
      <Header />
      <main className="App">
        <h1>Stephano Chatham</h1>
        <h2>Full Stack Developer | Veteran | Additive manufacturing expert</h2>
        <a
          href="https://www.linkedin.com/in/stephanochatham/"
          target="_blank"
          rel="noopener noreferrer"
        >
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
