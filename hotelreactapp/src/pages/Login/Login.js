import React, { useEffect, useState } from 'react'

const initialState = {
    username: "",
    password: ""
}

function Login() {
    const [formData, setFormdata] = useState(initialState)
    const [users, setUsers] = useState([])

    useEffect(function(){
        fetch('https://localhost:7122/customers')
        .then(res => res.json())
        .then(data => console.log(data))
        .then(data => setUsers(data))
        
    }, [])

    console.log(users)

    const handleSubmit = async (e) => {
        e.preventDefault()
       for (let i = 0; i < users.length; i++) {
        if(users[i].name === formData.username){
            
        }
        
       }

    }

    const handleChange = (e) => {
        setFormdata({...formData, [e.target.name]: e.target.value})
    }

  return (
    <div className='login'>
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor='username'>Username:</label>
        <input id='username' name='username' type='text' required onChange={handleChange} value={formData.username}/>

        <label htmlFor='password' >Password:</label>
        <input id='password' name='password' type='password' required onChange={handleChange} value={formData.password}/>

        <button type='submit'>
            Login
        </button>

    </form>
    </div>
  )
}

export default Login