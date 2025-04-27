import '../App.css'
import { Outlet, Link } from "react-router-dom";
const LogIn = () => {
    return <>
     <div>
    <div className='form-container'>
      <h1>Log In To Your Account</h1>
      <form className='form'>
      <label>Email Address:</label><br />
      <input type="email" name="username" placeholder="Enter your email"  />
      <br/>
      <label>Password:</label><br />
      <input type="password" name="password" placeholder="Enter your password"  />
      <br/>
      <button type="submit"> <Link to="/tasktracker" style={{textDecoration:'none',color:'white'}}>Log In</Link></button>
      <p>Don't have an account? <Link to="/signup"  style={{color:' rgb(30, 135, 177)'}}>Signup</Link></p>
      </form>
    </div>    
    <Outlet />
    </div>
    <Outlet />
    </>
  };
  
  export default LogIn;