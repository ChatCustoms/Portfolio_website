// src/pages/Home.tsx
// Only the hero header on the homepage
// (You can add highlight components later if you want.)
// @ts-expect-error
import Header from "../sections/header/Header.jsx";

export default function Home() {
  return (
    <main>
      <Header />
    </main>
  );
}
