import React, { useContext } from 'react'
import './Auth.css'
import { toast } from 'react-toastify'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
const Auth = () => {

  const navigate = useNavigate()
  const {url} = useContext(StoreContext);

  const verifyEmail = async() =>{
    const response = await axios.post(url +"/api/user/verified-otp",{success})
    if(response.data.success){
      navigate("/")
    }else{
      navigate("/auth")
      toast.error(response.data.error)
    }
  }
  return (
    <div className='auth'>
      <div className="overlay">
        <FaArrowLeft onClick={()=>navigate("/cart")} className='back' color='white'/>
        toast.success("OTP sent to your email address provided")
      </div>
      <form action="" method="post">
        <h2>Email Verification</h2>
        <h3>Enter Your One-Time Password</h3>
        <input type='tel' name="otp" id="email" placeholder='Enter your otp...' required autoFocus />
        <button type="submit" onClick={()=>verifyEmail()} value={"Submit"} className='subButton' formTarget='_self'>Submit</button><br/><br />
        <button type='button'>Resend</button>
      </form>
    </div>
  )
}

export default Auth
