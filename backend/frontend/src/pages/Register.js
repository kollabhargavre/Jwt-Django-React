import React from 'react'
import {Link} from 'react-router-dom'
const Register = () => {
  return (
    <div>
      <form>
        <input type="text" name="username" placeholder='Full Name'/>
        <input type="email" name="email" placeholder='Email'/>
        <input type="password" name="pass" placeholder='Password'/>
        <input type="password" name="repass" placeholder='Password(again)'/>
        <input type="submit" name="register"/>
      </form>
      <p>Have an account? <Link to="/login/">Login here</Link></p>
    </div>
  )
}

export default Register
