import React from 'react'
import { Link } from 'react-router-dom';
import "./signup.css"

export default function Signup() {
    const handleclick=()=>{
        let signup=document.querySelector(".total_signup");
        let signin=document.querySelector(".total_signin");
        if(signup.style.display==="block" && signin.style.display==="none" ){
            signup.style.display="none";
            signin.style.display="block";
        }
        else if(signup.style.display==="none" && signin.style.display==="block"){
            signup.style.display="block";
            signin.style.display="none";
        }
    }
    return (
        <div className='total_sign'>
            <div className='total_signup' style={{display:"block"}}>
                <h4>Create Your Account Here</h4>
                <label htmlFor="Username">Username</label><br />
                <input type="text" placeholder='username' /><br />
                <label htmlFor="mail">E-Mail</label><br />
                <input type="text" placeholder='Enter your Mail' /><br />
                <label htmlFor="password">Password</label><br />
                <input type="text" placeholder='Enter your Password' /><br /> <br />
                <button onClick={handleclick}>Create Accout</button><br /> 
                <div>OR</div>
                <button>SignUp With FACEBOOK</button><br /> 
                <div>Already have an accout, Login here</div>
                <button onClick={handleclick}>LOGIN</button><br />
            </div>
            <div className='total_signin' style={{display:"none"}}>
                <h4>Login to Your Account Here</h4>
                <label htmlFor="mail">E-Mail</label><br />
                <input type="text" placeholder='Enter your Mail' /><br />
                <label htmlFor="password">Password</label><br />
                <input type="text" placeholder='Enter your Password' /><br /> <br />
                <button > <Link to="/edit">LOGIN</Link> </button><br /> 
                <div>OR</div>
                <button>SignIn With FACEBOOK</button><br /> 
                <div>Don't have an Account, Create here</div>
                <button onClick={handleclick}>Create Account</button><br />
            </div>
        </div>
    )
}
