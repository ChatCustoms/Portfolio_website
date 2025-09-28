// src/pages/About.tsx
// @ts-expect-error
import AboutSection from "../sections/about/About.jsx";

export default function About() {
  return (
    <main id="about" style={{ padding: "1rem" }}>
      <AboutSection />
    </main>
  );
}
