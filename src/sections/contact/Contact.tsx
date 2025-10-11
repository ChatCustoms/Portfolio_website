import type { JSX } from "react";

import "./contact.css";

export default function Contact(): JSX.Element {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, please reach out via LinkedIn or email.</p>
      <a href="mailto:stephano.chatham@gmail.com">Email Me</a>
    </section>
  );
}
