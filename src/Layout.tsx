// src/Layout.tsx
import { Link, Outlet, useLocation } from "react-router-dom";
import homeBg from "../public/images/Home_background.png";
import aboutBg from "../public/images/About_background.png";
import projectsBg from "../public/images/Projects_background.png";
import contactBg from "../public/images/Contact_background.png";

const bgMap: Record<string, string> = {
  "/": homeBg,
  "/about": aboutBg,
  "/projects": projectsBg,
  "/contact": contactBg,
};

export default function Layout() {
  const { pathname } = useLocation();
  const bg = bgMap[pathname] || homeBg;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(10,12,16,0.45), rgba(10,12,16,0.45)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header style={{ background: "transparent" }}>
        <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <footer style={{ background: "transparent", padding: "2rem 1rem" }}>
        <small>© {new Date().getFullYear()} Stephano Chatham</small>
      </footer>
    </div>
  );
}
