import { useState } from "react";

function AddPet() {

  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("Dog");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const submitPet = (e) => {

    e.preventDefault();

    if (
      petName.trim() !== "" &&
      age.trim() !== "" &&
      description.trim() !== ""
    ) {

      setMessage("Pet Submitted Successfully 🐾");

      setPetName("");
      setPetType("Dog");
      setAge("");
      setImage("");
      setDescription("");

    } else {
      setMessage("Please fill all required fields");
    }

  };

  return (

    <section className="add-pet-section py-5">

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-md-8">

            <div className="add-pet-card about-section">

              <h2 className="text-center mb-4">
                Add a Pet for Adoption 🐾
              </h2>

              <form onSubmit={submitPet}>

                <div className="mb-3">

                  <label className="form-label">
                    Pet Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter pet name"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                  />

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Pet Type
                  </label>

                  <select
                    className="form-select"
                    value={petType}
                    onChange={(e) => setPetType(e.target.value)}
                  >

                    <option>Dog</option>

                    <option>Cat</option>

                    <option>Bird</option>

                    <option>Other</option>

                  </select>

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Age
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. 2 years"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Upload Image
                  </label>

                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setImage(e.target.value)}
                  />

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Description
                  </label>

                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Write details about the pet"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>

                </div>

                <div className="text-center">

                  <button
                    type="submit"
                    className="btn btn-main px-5"
                  >
                    Submit Pet
                  </button>

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

  );
}

export default AddPet;