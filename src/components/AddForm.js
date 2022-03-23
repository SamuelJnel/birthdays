import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPerson } from "../services/persons";

const AddForm = (props) => {
  const navigate = useNavigate();
  let fetchPeople = props.fetchPeople;

  const [age, setAge] = useState("");
  const [fullName, setFullName] = useState("");
  const profileImg = "https://i.imgur.com/WLM6Q2q.png";

  let ageCount = [];
  for (let i = 1; i <= 100; i++) {
    ageCount.push(i);
  }

  const handleAgeChange = async (event) => {
    setAge(event.target.value);
  };

  const handleFullNameChange = async (event) => {
    setFullName(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    //stops page from reloading when btn is clicked
    event.preventDefault();
    const formData = {
      age,
      name: fullName,
      image: profileImg,
    };
    await addPerson(formData);
    fetchPeople();
    navigate("/"); //redirects
  };

  return (
    <div>
      <div>
        <h3 className="add-form-heading">Add a person</h3>
      </div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            className="add-form-input"
            type="text"
            required
            value={fullName}
            onChange={handleFullNameChange}
            placeholder="Full Name..."
          />

          <select value={age} onChange={handleAgeChange}>
            <option value="age">Select Age</option>
            {ageCount.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
          <div>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
