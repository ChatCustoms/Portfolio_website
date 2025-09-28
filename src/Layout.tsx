// src/Layout.tsx
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <Outlet />
      <footer style={{ padding: "2rem 1rem" }}>
        <small>© {new Date().getFullYear()} Stephano Chatham</small>
      </footer>
    </div>
  );
}
