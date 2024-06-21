import React, { useState } from "react";
import "./css/LoginPage.css";
import WhiteLogo1 from "./assets/WhiteLogo1.png";
import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import {token,Login} from './api/API.jsx';
const loginpage = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [show, setshow] = useState(false);

  const navigate = useNavigate();
  const user = (e) => {
    const x = e.target.value;

    setusername(x);
  };
  const pass = (e) => {
    const x = e.target.value;
    setpassword(x);
  };
  const[message,setmessage]=useState();
  const login = async (e) => {
    e.preventDefault();
    try {
      const datavalue = {
        username: username,
        phone_number: password
      };
      // const formData = new FormData();
      // formData.append('phone', phone);
      // formData.append('password', password);
  
      // // Convert FormData to a plain object
      // const formDataObject = {};

      const response = await fetch('http://127.0.0.1:8000/api/v1/user/login/', {
        method: "POST",
        body: JSON.stringify(datavalue),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if the request was successful (status code 200-299)
      if (response.ok) {
        const responseData = await response.json(); // Parse response JSON
        console.log(responseData);
        localStorage.setItem("accesstoken", responseData.tokens.access);
        localStorage.setItem("refreshtoken", responseData.tokens.refresh);
        localStorage.setItem("id", responseData.data.id);
        localStorage.setItem("username", responseData.data.username);
        localStorage.setItem("district", responseData.data.district);
        localStorage.setItem("gender", responseData.data.gender);
        localStorage.setItem("phone_number", responseData.data.phone_number);
        localStorage.setItem("profile_image", responseData.data.profile_image);
        alert(responseData.message)
        // Log the response data
        navigate("/dashboard", { state: responseData });
      } else {
        console.error("Request failed with status:", response.status);
        const responseData = await response.json(); // Parse response JSON
        console.log(responseData.message);
        // setmessage(responseData);
        // alert("password incorrect");
        alert(responseData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log(password);
  const inputStyle = {
    color: "white",
  };
  const clicked = () => {
    setshow(!show);
    console.log(show);
  };
  const register=()=>{
    navigate('/register');
  }
  return (
    <>
      <div className="section-padding login-bg">
        <div className="row login-container">
          <div className="col-md-6 login-332">
            <img src={WhiteLogo1} alt="xitoimg" className="xitoimg" />
          </div>



          <div className="col-md-6 loginpage">
            <div className="header">
              <h1 className="welcome">welcome</h1>
              <p className="para">Please login to User Dashboard.</p>
            </div>

            <form className="loginform">
              <input
                style={inputStyle}
                onChange={user}
                type="text"
                placeholder="User_name"
                className="username"
              />
              <input
                style={inputStyle}
                value={password}
                onChange={pass}
                type={`${show ? "text" : "password"}`}
                placeholder="Phone_number"
                className="password"
              />
              <div className="eye">
                <span>
                  <VisibilityOffIcon
                    style={{ display: `${show ? "none" : ""}` }}
                    onClick={clicked}
                    className="visibility"
                  />
                </span>
                {show ? (
                  <span>
                    <RemoveRedEyeIcon
                      onClick={clicked}
                      className="visibility"
                    />
                  </span>
                ) : (
                  ""
                )}
              </div>

              <div className="login-button">
                <button className="Button" onClick={login}>
                  <span className="login">LOGIN</span>
                </button>
              </div>
              <div className="registernow">
                <p className="register"onClick={register}>Register Now</p>
              </div>
            </form>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default loginpage;
