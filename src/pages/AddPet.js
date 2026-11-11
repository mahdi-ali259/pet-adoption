import { useState } from "react";
import { EditNote, AddPhotoAlternate, Pets } from "@mui/icons-material";
import AddPetBanner from "../assets/AddPetBanner.webp";

const AddPet = ({ onAddPet }) => {

  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("dog");
  const [age, setAge] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!petName.trim() || !age.trim() || !description.trim()) {
      setMessage("Please fill all required fields");
      return;
    }

    if (image && !image.type.startsWith("image/")) {
      setMessage("Please choose an image file");
      return;
    }

    const pet = {
      name: petName.trim(),
      type: petType,
      age: age.trim(),
      description: description.trim(),
      fullDescription: description.trim(),
      subtitle: `${age.trim()} • ${petType.charAt(0).toUpperCase() + petType.slice(1)}`,
      image: image ? URL.createObjectURL(image) : null
    };

    onAddPet(pet);
    setMessage("Pet Submitted Successfully 🐾");
    setPetName("");
    setPetType("dog");
    setAge("");
    setImage(null);
    setDescription("");
    event.target.reset();
  };

  return (
    <div className="add-pet-page">
      <header className="add-pet-hero">
        <div className="add-pet-hero-text">
          <div className="container">
            <h1>
              <span className="add-pet-hero-line">
                <span>Find Them</span>{" "}
                <span className="add-pet-hero-heading-navy">a</span>
              </span>{" "}
              <span className="add-pet-hero-heading-navy add-pet-hero-line">Loving Home</span>
            </h1>
            <p>Help your pet start a new chapter.</p>
          </div>
        </div>
        <img
          src={AddPetBanner}
          alt="A dog against a blue background"
          className="add-pet-banner"
        />
      </header>

      <section className="add-pet-steps" aria-labelledby="add-pet-steps-heading">
        <div className="container">
          <h2 id="add-pet-steps-heading">How It Works</h2>
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="add-pet-step-card">
                <div className="add-pet-step-icon">
                  <EditNote aria-hidden="true" />
                </div>
                <p className="add-pet-step-number">01</p>
                <h3>Share Their Details</h3>
                <p>Tell us about your pet.</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="add-pet-step-card">
                <div className="add-pet-step-icon">
                  <AddPhotoAlternate aria-hidden="true" />
                </div>
                <p className="add-pet-step-number">02</p>
                <h3>Add a Photo</h3>
                <p>Help adopters get to know them.</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="add-pet-step-card">
                <div className="add-pet-step-icon">
                  <Pets aria-hidden="true" />
                </div>
                <p className="add-pet-step-number">03</p>
                <h3>Submit Your Pet</h3>
                <p>Add them to the adoption listings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="add-pet-form-section" aria-labelledby="add-pet-form-heading">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 add-pet-form-column">
              <div className="add-pet-card">
                <h2 id="add-pet-form-heading" className="text-center mb-3">Tell Us About Your Pet</h2>
                <p className="text-center mb-4">Share a few details to help them find a loving home.</p>

              <form onSubmit={handleSubmit}>
                <div className="row">

                <div className="col-12 col-md-6 mb-3 add-pet-field">

                  <label htmlFor="add-pet-name" className="form-label visually-hidden">
                    Pet Name
                  </label>

                  <input
                    id="add-pet-name"
                    type="text"
                    className="form-control"
                    placeholder="Enter pet name"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                  />

                </div>

                <div className="col-12 col-md-6 mb-3 add-pet-field">

                  <label htmlFor="add-pet-type" className="form-label visually-hidden">
                    Pet Type
                  </label>

                  <select
                    id="add-pet-type"
                    required
                    className="form-select"
                    value={petType}
                    onChange={(e) => setPetType(e.target.value)}
                  >

                    <option value="dog">Dog</option>

                    <option value="cat">Cat</option>

                    <option value="rabbit">Rabbit</option>

                    <option value="hamster">Hamster</option>

                    <option value="bird">Bird</option>

                  </select>

                </div>

                <div className="col-12 mb-3 add-pet-field">

                  <label htmlFor="add-pet-age" className="form-label visually-hidden">
                    Age
                  </label>

                  <input
                    id="add-pet-age"
                    type="text"
                    className="form-control"
                    placeholder="e.g. 2 years"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />

                </div>

                <div className="col-12 mb-3 add-pet-field">

                  <label htmlFor="add-pet-image" className="form-label">
                    Upload Image
                  </label>

                  <input
                    id="add-pet-image"
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={(event) => setImage(event.target.files[0] || null)}
                  />

                </div>

                <div className="col-12 mb-4">

                  <label htmlFor="add-pet-description" className="form-label visually-hidden">
                    Description
                  </label>

                  <textarea
                    id="add-pet-description"
                    className="form-control"
                    rows="4"
                    placeholder="Write details about the pet"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>

                </div>

                <div className="col-12 text-center">

                  <button
                    type="submit"
                    className="btn btn-main"
                  >
                    Submit Pet
                  </button>

                </div>

                </div>
              </form>

                <h4 className="text-center mt-4">
                  {message}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddPet;
