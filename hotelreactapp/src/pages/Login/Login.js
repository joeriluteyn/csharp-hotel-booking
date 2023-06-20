import "./login.css"
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from "../../components/navbar/Navbar"

const initialState = {
    username: "",
    password: ""
}

const errorState = ""

function Login() {
    const navigate = useNavigate()

    const [formData, setFormdata] = useState(initialState)
    const [users, setUsers] = useState([])
    const [errorMessage, setErrorMessage] = useState(errorState)

    
    useEffect(function(){
        fetch('https://localhost:7122/customers')
        .then(res => res.json())
        .then(data => setUsers(data))
        
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
       for (let i = 0; i < users.length; i++) {
        if(users !== undefined) {
            if(users[i].name === formData.username){
                if(users[i].password === formData.password)
                {
                    setErrorMessage("")
                    navigate(`/${formData.username}`)
                    
                }
                else {
                    setErrorMessage("Wrong Password")
                }

            } else {
                setErrorMessage("User Not Found")
                
            }
        }
        
        
       }

    }

    const handleChange = (e) => {
        setFormdata({...formData, [e.target.name]: e.target.value})
    }

  return (
    <div>
        <Navbar />
    <div className='login'>
    <form className='loginForm' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor='username'>Username:</label>
        <input className="loginFormItem" id='username' name='username' type='text' required onChange={handleChange} value={formData.username}/>

        <label htmlFor='password' >Password:</label>
        <input className="loginFormItem" id='password' name='password' type='password' required onChange={handleChange} value={formData.password}/>

        <button className="loginFormItem loginButton" type='submit'>
            Login
        </button>
        <p>{errorMessage}</p>

    </form>
    </div>
    </div>
  )
}

export default Login