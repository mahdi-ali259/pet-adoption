import { Link } from "react-router-dom";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

import HomeHero from "../assets/HomeHero.webp";
import PetCard1 from "../assets/PetCard1.jpg";
import PetCard2 from "../assets/PetCard2.jpg";
import PetCard3 from "../assets/PetCard3.jpg";

import RehomeImage from "../assets/RehomeImage.webp";
import HomeAboutImage from "../assets/HomeAboutImage.webp";
import HomeRehomeAboutImage from "../assets/HomeRehomeAboutImage.webp";
import HomeContactImage from "../assets/HomeContactImage.webp";

const featuredPets = [
  {
    id: 1,
    name: "Max",
    description: "1 year old • Friendly dog",
    image: PetCard1
  },
  {
    id: 2,
    name: "Luna",
    description: "1 year old • Cute cat",
    image: PetCard2
  },
  {
    id: 3,
    name: "Rocky",
    description: "2 years old • Playful dog",
    image: PetCard3
  }
];

const Home = ({ onSelectPet, favourites = [], onToggleFavourite }) => {
  return (
    <div className="home-page">
      <section id="home" className="home-hero">
        <div className="home-hero-text">
          <div className="container">
            <div className="home-hero-content">
              <h1>
                <span>Adopt.</span>{" "}
                <span className="home-hero-heading-navy">Don’t Shop.</span>
              </h1>
              <p>Find your new best friend and give a pet a loving home.</p>
              <Link to="/pets" className="btn btn-main">
                Find Your Pet
              </Link>
            </div>
          </div>
        </div>
        <div className="home-hero-media">
          <img
            src={HomeHero}
            className="home-hero-image"
            alt="A dog resting its face and both paws on a white ledge"
          />
        </div>
      </section>

      <section
        id="adopt"
        className="pets-section about-section py-5"
      >
        <div className="container">

          <h2 className="text-center mb-5">
            Meet Our Pets
          </h2>

          <div className="row gy-4">

            {featuredPets.map((pet) => (
              <div key={pet.id} className="col-md-4">
                <div className="card pet-card">

                  <div className="pet-card-photo">
                    <img
                      src={pet.image}
                      className={`card-img-top pet-card-image-${pet.id}`}
                      alt="pet"
                    />
                  </div>

                  <div className="card-body text-center">

                    <h5 className="card-title">
                      {pet.name}
                    </h5>

                    <p className="card-text">
                      {pet.description}
                    </p>

                    <div className="pet-card-actions">
                      <button
                        type="button"
                        className="pet-favourite-button"
                        aria-label={`${favourites.includes(pet.id) ? "Remove" : "Add"} ${pet.name} ${favourites.includes(pet.id) ? "from" : "to"} favourites`}
                        aria-pressed={favourites.includes(pet.id)}
                        onClick={() => onToggleFavourite(pet.id)}
                      >
                        {favourites.includes(pet.id) ? <Favorite aria-hidden="true" /> : <FavoriteBorder aria-hidden="true" />}
                      </button>
                      <Link
                        to="/pets"
                        onClick={() => onSelectPet(pet.id)}
                        className="btn btn-main"
                      >
                        Adopt Me
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="home-featured-more">
            <Link
              to="/pets"
              onClick={() => onSelectPet("all")}
              className="btn btn-main"
            >
              Meet More Pets
            </Link>
          </div>
        </div>
      </section>

      <div
        className="home-story-sections"
        style={{ backgroundImage: `url(${HomeRehomeAboutImage})` }}
      >
        <section id="addpet" className="home-rehome">
          <div className="home-rehome-text">
            <div className="container">
              <div className="home-rehome-content">
                <h2>Need to Rehome Your Pet?</h2>
                <div className="home-story-mobile-media">
                  <img
                    src={RehomeImage}
                    className="home-rehome-mobile-image"
                    alt="A sleeping dog resting in its bed"
                  />
                </div>
                <div className="home-story-copy">
                  <p>
                    If you can no longer care for your pet,
                    let us help find a loving new home.
                  </p>
                  <Link to="/addpet" className="btn btn-main mt-3">
                    Add Your Pet
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="home-about">
          <div className="home-about-text">
            <div className="container">
              <div className="home-about-content">
                <h2>About Us</h2>
                <div className="home-story-mobile-media">
                  <img
                    src={HomeAboutImage}
                    className="home-about-mobile-image"
                    alt="A ginger cat enjoying a gentle pet on the head"
                  />
                </div>
                <div className="home-story-copy">
                  <p>We are dedicated to helping pets find loving homes.</p>
                  <p>Every pet deserves a second chance.</p>
                  <Link to="/about" className="btn btn-main mt-3">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="support" className="home-support" aria-labelledby="home-support-heading">
        <div className="container">
          <h2 id="home-support-heading" className="text-center">Support</h2>
          <div className="home-support-grid">
            <article className="home-support-card">
              <h3>ADOPT</h3>
              <p>Provide comfort<br />&amp; care to<br />rescued animals.</p>
            </article>
            <article className="home-support-card">
              <h3>DONATE</h3>
              <p>Donate for food<br />and medical care of<br />homeless animals.</p>
            </article>
            <article className="home-support-card">
              <h3>FOSTER</h3>
              <p>Be foster parents<br />to animals<br />in need.</p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="contact-section about-section pb-5"
        style={{ backgroundImage: `url(${HomeContactImage})` }}
      >
        <div className="container home-contact-layout">
          <div className="home-contact-content">
          <div className="home-contact-intro">
            <h2 className="text-center mb-3">
              Contact Us <br />
            </h2>
            <div className="home-contact-mobile-media">
              <img
                src={HomeContactImage}
                className="home-contact-mobile-image"
                alt="A dog wearing sunglasses beside a laptop"
              />
            </div>
            <p className="text-center mb-0">
              Have questions? We'd love to hear from you!
            </p>
          </div>

              <form className="home-contact-form">

                <div className="mb-3">
                  <label htmlFor="home-contact-name" className="visually-hidden">Your Name</label>
                  <input
                    id="home-contact-name"
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="home-contact-email" className="visually-hidden">Email</label>
                  <input
                    id="home-contact-email"
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="home-contact-message" className="visually-hidden">Your Message</label>
                  <textarea
                    id="home-contact-message"
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-main w-100"
                >
                  Send Message
                </button>

              </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
