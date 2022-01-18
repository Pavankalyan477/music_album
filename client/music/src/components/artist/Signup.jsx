import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import "./signup.css"
import axios from "axios";

export default function Signup() {
    const [sign,setSign]=useState([]);

    const signupdata= async()=>{
        const data=await axios.get("http://localhost:2233/signup")
       
        setSign(data.data.signin);
    }
    useEffect(() => {
        signupdata()
    }, [])
    const handleclick=()=>{
        var email    = document.getElementById("mail").value;
        var password =  document.getElementById("psd").value;
        console.log("sign:",email,password)
        for(let i=0;i<sign.length;i++){
            if(email===sign[i].email && password===sign[i].password){
                Redirect("/edit");
            }
        }
        
        
    }
    return (
        <div className='total_sign'>
            {/* <div className='total_signup' style={{display:"block"}}>
                <h4>Create Your Account Here</h4>
                <label htmlFor="Username">Username</label><br />
                <input type="text" placeholder='username' id='user' /><br />
                <label htmlFor="mail">E-Mail</label><br />
                <input type="text" placeholder='Enter your Mail' id='mail' /><br />
                <label htmlFor="password">Password</label><br />
                <input type="text" placeholder='Enter your Password' id='psd' /><br /> <br />
                <button onClick={handleclick}>Create Accout</button><br /> 
                <div>OR</div>
                <button>SignUp With FACEBOOK</button><br /> 
                <div>Already have an accout, Login here</div>
                <button onClick={handleclick}>LOGIN</button><br />
            </div> */}
            <div className='total_signin'>
                <h4>Login to Your Account Here</h4>
                <label htmlFor="mail"  >E-Mail</label><br />
                <input type="text" placeholder='Enter your Mail' id='mail' /><br />
                <label htmlFor="password">Password</label><br />
                <input type="text" placeholder='Enter your Password' id='psd'  /><br /> <br />
                <button onClick={handleclick} > <Link>LOGIN</Link> </button><br /> 
                <div>OR</div>
                <button>SignIn With FACEBOOK</button><br /> 
                {/* <div>Don't have an Account, Create here</div>
                <button onClick={handleclick}>Create Account</button><br /> */}
            </div>
        </div>
    )
}
