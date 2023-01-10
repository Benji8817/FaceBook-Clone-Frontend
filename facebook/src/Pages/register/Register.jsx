import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./register.scss"


const Register = ()=>{
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>IBook Media.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                        <span>Do you have an account?</span>
                        <Link to="../login"> 
                        <button>Login</button>
                        </Link>
                </div>
                    <div className="right">
                        <h1>Register</h1>
                        <form>
                            <input type="text" placeholder="Username"></input>
                            <input type="email" placeholder="Email"></input>
                            <input type="password" placeholder="Password"></input>
                            <input type="text" placeholder="Name"></input>
                            <button>Login</button>
                        </form>
                    </div>

                    
                
            </div>
        </div>
       
        



    )
}
export default Register