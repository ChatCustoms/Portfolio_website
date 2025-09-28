// src/pages/Home.tsx
// @ts-expect-error - importing JSX without types for now
import Header from "../sections/header/Header.jsx";
// @ts-expect-error
import Projects from "../sections/projects/Projects.jsx";
// @ts-expect-error
import About from "../sections/about/About.jsx";
// @ts-expect-error
import Contact from "../sections/contact/Contact.jsx";

export default function Home() {
  return (
    <main style={{ padding: "1rem" }}>
      <Header />
      <a href="/projects">View my projects</a>
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
