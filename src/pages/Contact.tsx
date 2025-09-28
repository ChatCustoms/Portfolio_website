// src/pages/Contact.tsx
// @ts-expect-error
import ContactSection from "../sections/contact/Contact.jsx";

export default function Contact() {
  return (
    <main id="contact" style={{ padding: "1rem" }}>
      <ContactSection />
    </main>
  );
}
