import React,{useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Login = () => {
    
    let {loginUser}=useContext(AuthContext)
    
  return (
    <div>
        <header>Login</header>
        <form onSubmit={loginUser}>
            <input type="email" name="email" placeholder='Email'/>
            <input type="password" name="pass" placeholder='Password'/>
            <input type="submit" value="Login"/>
        </form>
        <p>Don't have an account?<Link to="/register/">Register here</Link></p>
    </div>
  )
}

export default Login
