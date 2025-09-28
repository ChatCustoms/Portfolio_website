// src/pages/Home.tsx
// Keep the hero in Header; switch to "highlight" components on Home
// (We’ll add those in step 2.)
// @ts-expect-error
import Header from "../sections/header/Header";
// @ts-expect-error
import FeaturedProjects from "../sections/projects/Projects";
// @ts-expect-error
import AboutSnippet from "../sections/about/About";
// @ts-expect-error
import ContactCTA from "../sections/contact/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <FeaturedProjects />
      <AboutSnippet />
      <ContactCTA />
    </main>
  );
}
