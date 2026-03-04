import React, { useState, useEffect } from 'react'
import {FaCookie} from "react-icons/fa"
import {toast} from 'react-toastify'
import './CookieForm.css'
import { Link } from 'react-router-dom'

const CookieForm = () => {
  const [cookie,setCookie] = useState(false);

  useEffect(() => {
      if(localStorage.getItem("cookie")){
        setCookie(true);
        document.getElementById("cookie").style.display="block";
      }
    }, [])

    const accept = () =>{
        setCookie(true);
        toast.success("Cookie Policy Accepted", {
          position: "bottom-right",
          autoClose: 200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        localStorage.setItem("cookie", Date.now(), 1)
    
      document.querySelector(".cookie-form").style.display="none";
    }
  
   const reject = () =>{
      setCookie(false)
     /* toast.error("Cookie Policy rejected", {
        position: "bottom-right",
        autoClose: 100,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      */
      localStorage.setItem("cookie",Date.UTC(),1)
    
    document.getElementById("cookie").style.display="none";
  }
  
  if(cookie){
    return null;
  }
  return (
        <div className='cookie-form' id='cookie'>
        <p><b>This website uses cookies <FaCookie/></b><br />
        This website uses cookies. For further information on <br /> how we use cookies you can read our <Link to="/privacy-policy">Privacy and Cookie notice</Link> 
        <br /><button onClick={accept}>ACCEPT COOKIES</button> <button className='cancel' onClick={reject}>REJECT</button></p>
      </div>
  )
}

export default CookieForm
