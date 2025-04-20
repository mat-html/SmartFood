import React, { useState } from "react";
import "../css/forms.css";

function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //TODO: implement database connection

    // try {
    //   const response = await fetch("http://localhost/submit.php", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const result = await response.json();
    //   console.log("Success:", result);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label className="form-label">First name:</label>
          <input
            className="form-control"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Last name:</label>
          <input
            className="form-control"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Email address:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Password:</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Repeat password:</label>
          <input
            className="form-control"
            type="password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          data-mdb-button-init
          data-mdb-ripple-init
          className="form-btn btn btn-block mb-4"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
