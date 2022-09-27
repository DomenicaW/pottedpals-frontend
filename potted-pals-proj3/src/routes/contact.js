import React from "react";

// STYLING
import "../css-sheets/contactCard.css";

// COMPONENTS
import ContactCard from "../components/ContactCard.js";

function Contact() {
  return (
    <main>
      <div className="ContactTitle">
        <h2>About Us</h2>
        <h4>Meet the Team Behind the Plants</h4>
      </div>

      <ContactCard name="DOMENICA WALLACE" title="SOFTWARE ENGINEER" image="linkedin-logo-slate-small.png" link="https://www.linkedin.com/in/domenica-wallace/"/>
      <ContactCard name="EVANN FRIES" title="SOFTWARE ENGINEER" image="linkedin-logo-slate-small.png" link="https://www.linkedin.com/in/evann-fries/"/>
      <ContactCard name="ADRIANA REGALADO" title="SOFTWARE ENGINEER" image="linkedin-logo-slate-small.png" link="https://www.linkedin.com/in/am-regalado/"/>
    </main>
  );
}

export default Contact;
