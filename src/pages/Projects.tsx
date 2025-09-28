// src/pages/Projects.tsx
// @ts-expect-error
import ProjectsSection from "../sections/projects/Projects.jsx";

export default function Projects() {
  return (
    <main id="projects" style={{ padding: "1rem" }}>
      <ProjectsSection />
    </main>
  );
}
