import { MailRounded } from "@mui/icons-material";

function Contact() {
  return (
    <div className="contact-section py-5">

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-md-8">

            <div className="contact-card about-section">

              <h2 className="text-center mb-3">
                Get In Touch <br/><MailRounded/>
              </h2>

              <p className="text-center text-muted mb-4">
                We'd love to hear from you. Send us a message anytime.
              </p>

              <form>

                <div className="row">

                  <div className="mb-3">

                    <label className="form-label">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />

                  </div>

                  <div className="mb-3">

                    <label className="form-label">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="example@gmail.com"
                    />

                  </div>

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Subject
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Message subject"
                  />

                </div>

                <div className="mb-4">

                  <label className="form-label">
                    Message
                  </label>

                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Write your message..."
                  ></textarea>

                </div>

                <div className="text-center">

                  <button
                    type="submit"
                    className="btn btn-main px-5"
                  >
                    Send Message
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;