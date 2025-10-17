import { Link } from "react-router-dom";
import Page from "../app/Page";
import background from "../../public/images/Home_background.png";

export default function NotFound() {
  return (
    <Page bg={background} overlay="rgba(6,10,16,0.4)">
      <div className="page-content" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem 1rem'
      }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
        <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ marginBottom: '2rem', opacity: 0.85 }}>
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#ffffff',
            color: '#0a0f2d',
            borderRadius: '10px',
            textDecoration: 'none',
            fontWeight: 600,
            margin: 0
          }}
        >
          Go Home
        </Link>
      </div>
    </Page>
  );
}
