import React from 'react'
import { Link, useHistory } from "react-router-dom"
import "./Login.css"


function Login() {
  return (
    <div className="login">
      <Link to="/">

        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>


      <div className="login__container">
        <h1>Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="text" />
          <button>Sign In</button>
        </form>

        <p>By signing-in you agree to Amazon's Conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
        <button>Create your Amazon Account</button>
      </div>

    </div>
  )
}

export default Login
