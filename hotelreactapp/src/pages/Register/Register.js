import "./register.css"
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from "../../components/navbar/Navbar"

const initialState = {
    Name: "",
    Password: "",
    Email: "",
    Phone: ""
}


function Register() {
    const navigate = useNavigate()

    const [formData, setFormdata] = useState(initialState)
    
    const handleSubmit = async e => {
        e.preventDefault()
        await fetch('https://localhost:7122/customers', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        });
        navigate("/login")
        console.log(formData)
    }
    

    const handleChange = (e) => {
        setFormdata({...formData, [e.target.name]: e.target.value})
    }

  return (
    <div>
        <Navbar />
    <div className="register">
        
        <form className="registerForm" onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <label htmlFor='username'>Username:</label>
            <input className="registerFormItem" id="username" name="Name" type="username" required onChange={handleChange} value={formData.username}/>
            <label htmlFor='password'>Password:</label>
            <input className="registerFormItem" id="password" name="Password" type="text" required onChange={handleChange} value={formData.password}/>

            <label htmlFor='phone'>Phone:</label>
            <input className="registerFormItem" id="phone" name="Phone" type="phone" required onChange={handleChange} value={formData.phone}/>

            <label htmlFor='email'>Email:</label>
            <input className="registerFormItem" id="email" name="Email" type="email" required onChange={handleChange} value={formData.email}/>

            <button className="registerFormItem registerButton" type="submit">
                        Sign up
            </button>
            
        </form>
    </div>
    </div>
  )
}

export default Register