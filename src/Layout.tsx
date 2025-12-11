// src/Layout.tsx
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./layout.css";

export default function Layout() {
  const { pathname } = useLocation();
  const page = pathname === "/" ? "home" : pathname.replace("/", "");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`app-shell page-${page}`}>
      <header>
        <button
          className="hamburger-button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-icon">☰</span>
        </button>

        <nav className={`main-nav ${menuOpen ? "mobile-menu-open" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/resume" onClick={closeMenu}>Resume</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>

        {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer style={{ padding: "2rem 1rem" }}>
        <small>© {new Date().getFullYear()} Stephano Chatham</small>
      </footer>
    </div>
  );
}
