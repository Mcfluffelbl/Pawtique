import "../styles/ContactPage.css";

import {
  Envelope,
  Telephone,
  GeoAlt,
  Clock,
  Send,
} from "react-bootstrap-icons";

function ContactPage() {
  return (
    <div className="contact-page">

      <section className="contact-hero">

        <div className="contact-hero-text">

          <h3>CONTACT US 🐾</h3>

          <h1>
            We'd love to hear from you!
          </h1>

          <p>
            Whether you have a question about adoption,
            our products, or anything else — we’re here to help.
          </p>

        </div>

        <img
          src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1200&auto=format&fit=crop"
          alt="Cute cat"
        />

      </section>

      <section className="contact-container">

        <div className="contact-info">

          <h2>Get in Touch</h2>

          <div className="info-box">
            <div className="icon purple">
              <Envelope />
            </div>

            <div>
              <h4>Email Us</h4>
              <p>hello@pawtique.com</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon pink">
              <Telephone />
            </div>

            <div>
              <h4>Call Us</h4>
              <p>(123) 456-7890</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon yellow">
              <GeoAlt />
            </div>

            <div>
              <h4>Visit Us</h4>
              <p>123 Cat Lane, Purrsville</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon green">
              <Clock />
            </div>

            <div>
              <h4>Business Hours</h4>
              <p>Mon - Fri: 9AM - 6PM</p>
            </div>
          </div>

        </div>

        <div className="contact-form">

          <h2>Send us a Message</h2>

          <form>

            <div className="input-row">

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              placeholder="Message"
              rows="6"
            ></textarea>

            <button type="submit">
              Send Message <Send />
            </button>

          </form>

        </div>

      </section>

      <section className="contact-bottom">

        <img
          src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=600&auto=format&fit=crop"
          alt="Cat"
        />

        <div>
          <h2>
            Every message helps make a difference.
          </h2>

          <p>
            Thank you for supporting cats and their happy lives.
          </p>
        </div>

      </section>

    </div>
  );
}

export default ContactPage;