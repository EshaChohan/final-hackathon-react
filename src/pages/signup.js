import '../App.css'
import React, { useState} from 'react';
import { Outlet, Link } from "react-router-dom";
const SignUp = () => {
  
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      dob: '',
      cnic: '',
      designation: ''
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
    const handleSubmit = () => {
      console.log("Form Data Submitted:", formData);
    };
    
    return <>
    <div>
    <div className='form-container'>
      <h1>Create An Account</h1>
      <form className='form'  onSubmit={handleSubmit}>
        <label>Username:</label><br />
      <input type="text" name="username" placeholder="Enter your name" required  onChange={handleChange} />
      <br/>
      <label>Email Address:</label><br />
      <input type="email" name="email" placeholder="Enter your email" required  onChange={handleChange} />
      <br/>
      <label>Password:</label><br />
      <input type="password" name="password" placeholder="Enter your password" required  onChange={handleChange} />
      <br/>
      <label>CNIC:</label><br />
      <input type="number" name="cnic" placeholder="Enter your CNIC number" required  onChange={handleChange} />
      <br/>
      <button type="submit"><Link to="/login" style={{textDecoration:'none',color:'white'}}>Sign Up</Link></button>
      <p>Already have an account? <Link to="/login" style={{color:' rgb(30, 135, 177)'}}>Login</Link></p>
      </form>
    </div>    
    </div>
    <Outlet />
    </>
  };
  
  export default SignUp;