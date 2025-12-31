import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState({
        name: "",
        email: "", 
        password: "",
    })

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const res = await axios.post("/api/user/register",{
            name: userdata.name,
            email: userdata.email,
            password: userdata.password,
        },
    {
        withCredentials: true,
    });

    if(res.status.success){
        toast.success("Registration successful");
        setUserdata({
            name: "",
            email: "",
            password: "",
        });
        const userRole = res.data.user.role;
        if(userRole === "admin"){
            navigate("/admin/dashboard");
        } else {
            navigate("/");
        }
    }
    }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
        type='name'
        placeholder='Name'
        onChange={(e)=>setUserdata({...userdata, name: e.target.userdata})}
        />

        
        <input
        type='email+'
        placeholder='Email'
        onChange={(e)=>setUserdata({...userdata, email: e.target.userdata})}
        />

        
        <input
        type='password'
        placeholder='Password'
        onChange={(e)=>setUserdata({...userdata, password: e.target.userdata})}
        />

        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
