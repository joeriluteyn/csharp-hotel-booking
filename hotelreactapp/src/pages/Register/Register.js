import "./register.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const initialState = {
  Name: "",
  Password: "",
  Email: "",
  Phone: "",
};



function Register() {
  const navigate = useNavigate();

  const [formData, setFormdata] = useState(initialState);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(function () {
    fetch("https://localhost:7122/customers")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let i = 0; i < users.length; i++) {
      
      if (users[i].name === formData.Name){
        console.log(users[i].email)
        setErrorMessage("Account name already exist")
        return;
      } else if(users[i].email === formData.Email){
        setErrorMessage("Email already in use")
        return
      }
    }
    
    await fetch("https://localhost:7122/customers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        navigate("/login");


    
  };

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <div className="register">
        <form className="registerForm" onSubmit={handleSubmit}>
          <h2>Sign up</h2>
          <label htmlFor="username">Username:</label>
          <input
            className="registerFormItem"
            id="username"
            name="Name"
            type="username"
            required
            onChange={handleChange}
            value={formData.username}
          />
          <label htmlFor="password">Password:</label>
          <input
            className="registerFormItem"
            id="password"
            name="Password"
            type="text"
            required
            onChange={handleChange}
            value={formData.password}
          />

          <label htmlFor="phone">Phone:</label>
          <input
            className="registerFormItem"
            id="phone"
            name="Phone"
            type="phone"
            required
            onChange={handleChange}
            value={formData.phone}
          />

          <label htmlFor="email">Email:</label>
          <input
            className="registerFormItem"
            id="email"
            name="Email"
            type="email"
            required
            onChange={handleChange}
            value={formData.email}
          />

          <p className="registerFormItem errorMessage">{errorMessage}</p>

          <button className="registerFormItem registerButton" type="submit">
            Sign up
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
