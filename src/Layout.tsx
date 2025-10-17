// src/Layout.tsx
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();
  const page = pathname === "/" ? "home" : pathname.replace("/", "");

  return (
    <div className={`app-shell page-${page}`}>
      <header>
        <nav
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1rem",
            justifyContent: "center",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
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
