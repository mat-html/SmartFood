import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: ""
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
            <label>
                First name:
                <input className="form-control" name="firstName" value={formData.firstName} onChange={handleChange}/>
            </label>
            </div>
            <div className="form-group mb-2">
            <label>
                Last name:
                <input className="form-control" name="lastName" value={formData.lastName} onChange={handleChange}/>
            </label>
            </div>
            <div className="form-group mb-2">
            <label>
                Email address:
                <input className="form-control" type="email" name="email" value={formData.email} onChange={handleChange}/>
            </label>
            </div>
            <div className="form-group mb-2">
            <label>
                Password:
                <input className="form-control" type="password" name="password" value={formData.password} onChange={handleChange}/>
            </label>
            </div>
            <div className="form-group mb-2">
            <label>
                Repeat password:
                <input className="form-control" type="password" name="repeatPassword" value={formData.repeatPassword} onChange={handleChange}/>
            </label>
            </div>
            <input className="btn btn-primary" type="submit" value="Sign up"/>
        </form>
    </div>
  );
};

export default SignupForm;