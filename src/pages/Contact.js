import { useState } from "react";
import { MailRounded, Phone, LocationPin } from "@mui/icons-material";
import ContactBanner from "../assets/ContactBanner.webp";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!fullName.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      alert("Please complete all fields.");
      return;
    }

    const contact = { fullName, email, subject, message };
    alert(JSON.stringify(contact, null, 2));

    setFullName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="contact-page">
      <header className="contact-page-hero">
        <div className="contact-page-hero-text">
          <div className="container">
            <h1>Contact <span className="contact-page-hero-heading-navy">Us</span></h1>
            <p>Are you ready to make a change?</p>
          </div>
        </div>
        <img
          src={ContactBanner}
          alt="A row of cats and dogs against a blue background"
          className="contact-page-banner"
        />
      </header>

      <section className="contact-page-reach" aria-labelledby="contact-reach-heading">
        <div className="container">
          <h2 id="contact-reach-heading">Reach Us</h2>
          <p className="contact-page-invitation">Interested in finding out more?</p>

          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="contact-page-info-card">
                <div className="contact-page-info-icon">
                  <LocationPin aria-hidden="true" />
                </div>
                <h3>Location</h3>
                <p>Tyre, Lebanon</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="contact-page-info-card">
                <div className="contact-page-info-icon">
                  <Phone aria-hidden="true" />
                </div>
                <h3>Phone</h3>
                <p><a href="tel:+96171095739">+961 71 095 739</a></p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="contact-page-info-card">
                <div className="contact-page-info-icon">
                  <MailRounded aria-hidden="true" />
                </div>
                <h3>Email</h3>
                <p><a href="mailto:info@petadopt.com">info@petadopt.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section contact-page-form" aria-labelledby="contact-form-heading">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 contact-page-form-column">
              <div className="contact-card about-section">
                <h2 id="contact-form-heading" className="text-center mb-3">
                  Get In Touch <br/><MailRounded/>
                </h2>
                <p className="text-center contact-page-form-intro mb-4">
                  Fill out the contact form below and we will be in touch in 2-3 working days.
                </p>

              <form onSubmit={handleSubmit}>

                <div className="row">

                  <div className="mb-3">

                    <label htmlFor="contact-full-name" className="form-label visually-hidden">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="contact-full-name"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                    />

                  </div>

                  <div className="mb-3">

                    <label htmlFor="contact-email" className="form-label visually-hidden">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      id="contact-email"
                      placeholder="Email address"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />

                  </div>

                </div>

                <div className="mb-3">

                  <label htmlFor="contact-subject" className="form-label visually-hidden">
                    Subject
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="contact-subject"
                    placeholder="Subject"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                  />

                </div>

                <div className="mb-4">

                  <label htmlFor="contact-message" className="form-label visually-hidden">
                    Message
                  </label>

                  <textarea
                    className="form-control"
                    rows="5"
                    id="contact-message"
                    placeholder="Write your message..."
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  ></textarea>

                </div>

                <div className="text-center">

                  <button
                    type="submit"
                    className="btn btn-main"
                  >
                    Send Message
                  </button>

                </div>

              </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
