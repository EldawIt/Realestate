"use client";
import "./Contact.css";
import IconPage from "./IconPage";
function Contact() {
  return (
    <div>
        <h1 style={{ textAlign: "center" }}>تواصل معانا </h1>
        <div className="container">
          <div className="cover-photo">
            <img
              src="https://marketplace.canva.com/EAFegMagbOg/1/0/1600w/canva-gold-modern-corporate-round-luxury-real-estate-logo-CSP1sL3K9x0.jpg"
              className="profile"
            />
          </div>
          <p className="about">
            Tanta Realstate
            <br />
          </p>
          <IconPage />
        </div>
    </div>
  );
}

export default Contact;
