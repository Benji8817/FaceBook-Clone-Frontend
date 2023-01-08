import React from 'react'
import "./login.scss"
// import welcomeimage from "../../assets/pexels-maksim-goncharenok-5821029.jpg"

const Login = ()=>{
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    {/* <img src={welcomeimage}></img> */}
                    <h1>Hey You There!!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                        <span>Don't you have an  account?</span>
                        <button>Register</button>
                </div>
                    <div className="right">
                        <h1>Login</h1>
                        <form>
                            <input type="text" placeholder="Username"></input>
                            <input type="Password" placeholder="Password"></input>
                            <button>Login</button>
                        </form>
                    </div>

                    
                
            </div>
        </div>
       
        



    )
}
export default Login