import React, { useState } from 'react'
import WhiteLogo1 from "./assets/WhiteLogo1.png";
import { useScrollTrigger } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate=useNavigate();
  const[username,setusername]=useState();
  const[userphonenumber,setuserphonenumber]=useState();
  const[usergender,setusergender]=useState('Male');
  const[userdistrict,setuserdistrict]=useState();
  
  const user=(e)=>{
    const x=e.target.value;
    console.log("this is user",x);
    setusername(x);
    
  }
  const phonenumber=(e)=>{
    const x=e.target.value;
    console.log("this is phone number",x);
    setuserphonenumber(x);
  }
  const gender=(e)=>{
    const x=e.target.value;
    setusergender(x);
    console.log("this is gender",x);
  }
  const district=(e)=>{
    const x=e.target.value;
    setuserdistrict(x);
    console.log("this is district",x);
  }
  const register=async(e)=>{
    e.preventDefault();
    
    const data={
      username:username,
      phone_number:userphonenumber,
      gender:usergender,
      district:userdistrict
    }

    try {

      // const formData = new FormData();
      // formData.append('phone', phone);
      // formData.append('password', password);
  
      // // Convert FormData to a plain object
      // const formDataObject = {};

      const response = await fetch('http://127.0.0.1:8000/api/v1/user/register/', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if the request was successful (status code 200-299)
      if (response.ok) {
        const responseData = await response.json(); // Parse response JSON
        console.log("register succesfully",responseData);
        alert('register successfully');
        navigate('/');
        
        
        // Log the response data
        // navigate("/dashboard", { state: responseData });
      } else {
        console.error("Request failed with status:", response.status);
        alert("request failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const login=()=>{
    navigate('/');
  }
  return (
    <div>
        <div className="section-padding login-bg">
        <div className="row login-container">
        <div className="col-md-6 login-332">
            <img src={WhiteLogo1} alt="xitoimg" className="xitoimg" />
          </div>


          <div className="col-md-6 loginpage registerpage">
            <div className="header">
              <h1 className="welcome">welcome</h1>
              <p className="para">Please Register to User Dashboard.</p>
            </div>

            <form onSubmit={register} className="loginform">
              <input
                onChange={user}
                type="text"
                placeholder="User_name"
                className="username"
                style={{color:'#FFF'}}
              />
              <input
                onChange={phonenumber}
                placeholder="Phone_number"
                className="password"
              />
              <select onChange={gender} className='password gender'>
                <option selected>Male</option>
                <option>Female</option>
              </select>

              <input
              
                placeholder="District"
                className="password gender"
                style={{color:'#FFF'}}
                onChange={district}
              />
             

              <div className="login-button">
                <input type="submit" value="REGISTER" className="Button"/>
                  {/* <span className="login">REGISTER</span> */}
                {/* </button> */}
              </div>
              <div className="registernow">
                <p className="register"onClick={login}>LOGIN</p>
              </div>
             
            </form>
          </div>
            </div>

        </div>
    </div>
  )
}

export default Register