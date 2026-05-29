import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram"; 
import FacebookIcon from"@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { MailRounded, Phone, LocationPin } from "@mui/icons-material";

function Footer() {
  return (
    <footer className="footer-section">

      <div className="container">

        <div className="row">

          <div className="col-md-4">

            <h3 className="footer-logo">
              PetAdopt 🐾
            </h3>

            <p>
              <b>Helping pets find loving homes.<br></br>
              Adopt, don’t shop.</b>
            </p>

          </div>

          <div className="col-md-4">

            <h5>Quick Links</h5>

            <ul className="footer-links">

              <li>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link className="nav-link" to="/Pets">
                  Adopt
                </Link>
              </li>

              <li>
                <Link className="nav-link" to="/AddPet">
                  Add Pet
                </Link>
              </li>

              <li>
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>

              <li>
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          <div className="col-md-4">

            <h5>Contact Us</h5>

            <div className="contact-item">
              <a href="/"><LocationPin /></a>
              <strong>Address:</strong>
              <b>Tyre, Lebanon</b>
            </div>

            <div className="contact-item">
              <a href="/"><MailRounded /></a>
              <strong>Email:</strong> <b>info@petadopt.com</b>
            </div>

            <div className="contact-item">
              <a href="/"><Phone /></a>
              <strong>Phone:</strong> <b>+961 71 095 739</b>
            </div>

            <div className="social-icons">

              <a href="/">
                <InstagramIcon />
              </a>

              <a href="/">
                <FacebookIcon />
              </a>

              <a href="/">
                <LinkedInIcon />
              </a>
            
            </div>

          </div>

        </div>

        <div className="footer-bottom text-center mt-4">

          <p>
            &copy; 2026 PetAdopt.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;