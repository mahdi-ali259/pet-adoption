import AboutImage from "../assets/About.jpg";

function About() {
  return (

    <div className="about-section py-5 back">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-md-6">

            <img
              src={AboutImage}
              alt="about"
              className="img-fluid about-img"
            />

          </div>

          <div className="col-md-6">

            <h2>
              About PetAdopt 🐾
            </h2>

            <p>
              PetAdopt is a platform dedicated to helping
              animals find loving homes.
              We believe every pet deserves care,
              love, and a second chance.
            </p>

            <p>
              Our mission is to connect people who care
              with pets who need them the most.
            </p>

            <p>
              Together, we can make a difference in
              their lives.
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default About;