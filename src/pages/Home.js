import { Link } from "react-router-dom";
import { MailRounded } from "@mui/icons-material";

import pet1 from "../assets/pet1.jpg";
import pet2 from "../assets/pet2.jpg";
import pet3 from "../assets/pet3.jpg";
import PetCard1 from "../assets/PetCard1.jpg";
import PetCard2 from "../assets/PetCard2.jpg";
import PetCard3 from "../assets/PetCard3.jpg";

import addpet from "../assets/addpet.jpg";
import aboutImg from "../assets/About.jpg";

function Home() {
  return (
    <>
      <section
        id="home"
        className="carousel slide"
        data-bs-ride="carousel"
      >

        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#home"
            data-bs-slide-to="0"
            className="active"
          ></button>

          <button
            type="button"
            data-bs-target="#home"
            data-bs-slide-to="1"
          ></button>

          <button
            type="button"
            data-bs-target="#home"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src={pet1}
              alt="pet1"
              className="d-block w-100"
            />

            <div className="carousel-caption">
              <h3>Find Your New Best Friend</h3>

              <p>Give a pet a loving home today</p>

              <Link to="/pets" className="btn btn-main">
                Adopt Now
              </Link>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={pet2}
              alt="pet2"
              className="d-block w-100"
            />

            <div className="carousel-caption">
              <h3>They Need You</h3>

              <p>
                Thousands of pets are waiting for a family
              </p>

              <Link to="/pets" className="btn btn-main">
                View Pets
              </Link>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={pet3}
              alt="pet3"
              className="d-block w-100"
            />

            <div className="carousel-caption">
              <h3>Adopt, Don't Shop</h3>

              <p>
                Save a life and gain a loyal companion
              </p>

              <Link to="/pets" className="btn btn-main">
                Start Adopting
              </Link>
            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#home"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#home"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </section>

      <section
        id="adopt"
        className="pets-section about-section py-5"
      >
        <div className="container">

          <h2 className="text-center mb-5">
            Meet Our Pets 🐾
          </h2>

          <div className="row">

            <div className="col-md-4">
              <div className="card pet-card">

                <img
                  src={PetCard1}
                  className="card-img-top"
                  alt="pet"
                />

                <div className="card-body text-center">

                  <h5 className="card-title">
                    Max
                  </h5>

                  <p className="card-text">
                    1 year old • Friendly dog
                  </p>

                  <Link
                    to="/pet1"
                    className="btn btn-main mt-3"
                  >
                    Adopt Me
                  </Link>

                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card pet-card">

                <img
                  src={PetCard2}
                  className="card-img-top"
                  alt="pet"
                />

                <div className="card-body text-center">

                  <h5 className="card-title">
                    Luna
                  </h5>

                  <p className="card-text">
                    1 year old • Cute cat
                  </p>

                  <Link
                    to="/pet2"
                    className="btn btn-main mt-3"
                  >
                    Adopt Me
                  </Link>

                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card pet-card">

                <img
                  src={PetCard3}
                  className="card-img-top"
                  alt="pet"
                />

                <div className="card-body text-center">

                  <h5 className="card-title">
                    Rocky
                  </h5>

                  <p className="card-text">
                    2 years old • Playful dog
                  </p>

                  <Link
                    to="/pet3"
                    className="btn btn-main mt-3"
                  >
                    Adopt Me
                  </Link>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section
        id="addpet"
        className="add-home-section py-5 about-section"
      >
        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <h2>
                Need to Rehome Your Pet? 🐾
              </h2>

              <p>
                If you can no longer care for your pet,
                let us help find a loving new home.
              </p>

              <Link
                to="/addpet"
                className="btn btn-main mt-3"
              >
                Add Your Pet
              </Link>

            </div>

            <div className="col-md-6 text-center">

              <img
                src={addpet}
                className="img-fluid add-home-img"
                alt="add pet"
              />

            </div>

          </div>
        </div>
      </section>

      <section
        id="about"
        className="about-section py-5"
      >
        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <img
                src={aboutImg}
                className="img-fluid about-img"
                alt="about"
              />

            </div>

            <div className="col-md-6">

              <h2>
                About Us 🐾
              </h2>

              <p>
                We are dedicated to helping pets
                find loving homes.
              </p>

              <p>
                Every pet deserves a second chance.
              </p>

              <Link
                to="/about"
                className="btn btn-main mt-3"
              >
                Learn More
              </Link>

            </div>

          </div>
        </div>
      </section>

      <section
        id="contact"
        className="contact-section about-section py-5"
      >
        <div className="container">

          <h2 className="text-center mb-5">
            Contact Us <br /><MailRounded />
          </h2>

          <p className="text-center text-muted mb-4">
            Have questions? We'd love to hear from you!
          </p>

          <div className="row justify-content-center">

            <div className="col-md-6">

              <form>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="mb-3">
                  <textarea
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
        </div>
      </section>

    </>
  );
}

export default Home;