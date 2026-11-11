import { Link } from "react-router-dom";
import AboutImage from "../assets/AboutImage.webp";

const About = () => {
  return (
    <section className="about-page" style={{ backgroundImage: `url(${AboutImage})` }}>
      <div className="container">
        <div className="about-page-content">
          <h1>
            <span>Every Pet</span>{" "}
            <span className="about-page-heading-navy">Deserves a Loving Home</span>
          </h1>
          <div className="about-page-mobile-media">
            <img
              src={AboutImage}
              alt="Two cats and two dogs sitting together"
              className="about-page-mobile-image"
            />
          </div>
          <p>
            At PetAdopt, we help pets find caring families and a fresh start.
            Explore our pets and welcome a new companion into your home.
          </p>
          <Link to="/pets" className="btn btn-main about-page-button">
            Make a Pet
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
