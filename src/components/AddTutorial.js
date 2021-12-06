import React, { useState } from "react";
import TutorialDataService from "../services/TutorialService";

const AddTutorial = () => {
  const initialTutorialState = {
    id: null,
    name: "",
    gender: "",
    city: " ",
    salary:" ",
    dateOfBirth:" ",
    published: false
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    console.log(tutorial)
    var data = {
      Name: tutorial.name,
      Gender: tutorial.gender,
      City: tutorial.city,
      Salary:tutorial.salary,
      DateOfBirth:tutorial.dateOfBirth
    };

    TutorialDataService.create(data)
    
      .then(response => {
        setTutorial({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">ID</label>
            <input
              type="text"
              className="form-control"
              id="id"
              required
              value={tutorial.id}
              onChange={handleInputChange}
              name="id"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={tutorial.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Gender</label>
            <input
              type="text"
              className="form-control"
              id="gender"
              required
              value={tutorial.gender}
              onChange={handleInputChange}
              name="gender"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              required
              value={tutorial.city}
              onChange={handleInputChange}
              name="city"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Salary</label>
            <input
              type="text"
              className="form-control"
              id="salary"
              required
              value={tutorial.salary}
              onChange={handleInputChange}
              name="salary"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">DateOfBirth</label>
            <input
              type="text"
              className="form-control"
              id="dateOfBirth"
              required
              value={tutorial.dateOfBirth}
              onChange={handleInputChange}
              name="dateOfBirth"
            />
          </div>


          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>

  );
};

export default AddTutorial;