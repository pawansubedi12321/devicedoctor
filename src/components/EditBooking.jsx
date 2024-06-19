import React, { useState ,useEffect} from 'react';
// import '../css/createbooking.css';
// import Navbar from '../../navbar/Navbar';
import Navbar from './navbar/Navbar';
import Image from '././assets/img.png';
import { UNSAFE_DataRouterStateContext } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const EditBooking = () => {
  const [brand, setbrand]=useState("")
  const[booked,setbooked]=useState("");
  const[item,setitem]=useState("");
  const[time,settime]=useState("");
  const[userlocation,setuserlocation]=useState("");
  const[problem,setproblem]=useState("");
  const[userdescription,setuserdescription]=useState("");
  const[userid,setuserid]=useState("");
  const[image,setimage]=useState("");
  const[clickedimage,setclickedimage]=useState('');
  const[backgroundimage,setbackgroundimage]=useState('');
  const[phone,setphone]=useState('');
  const {state}=useLocation();
  console.log("this is state",state);
 
//   console.log("this is stae.id",state.id);
//   console.log("this is state and bookedproblem",state.booked_problem);
  useEffect(() => {
    // Retrieve data from local storage when the component mounts
    const storedData = JSON.parse(localStorage.getItem('id'));
    if (storedData) {
      setuserid(storedData);
    }
  }, []);

  const selectedbrand=(e)=>{
    const x=e.target.value;
    setbrand(x);
    

  }
  const bookeddate=(e)=>{
    const x=e.target.value;
    setbooked(x);
    // console.log("this is bokked date",x);

  }
  const itemcount=(e)=>{
    const x=e.target.value;
    console.log("this is itemcount",x);
    setitem(x);
    
  }
  const timeperiod=(e)=>{
    const x=e.target.value;
    settime(x);

  }
  const location=(e)=>{
    const x=e.target.value;
    setuserlocation(x);
  }
  const probleminterval=(e)=>{
    const x=e.target.value;
    setproblem(x);
  }
  const description=(e)=>{
    const x=e.target.value;
    setuserdescription(x);
    
  }
  const file=(e)=>{
    const x=e.target.files[0];
    console.log("this is x",x);
    setimage(x);

    
    // setimg(x);
    if (x) {
      const y = URL.createObjectURL(x);
      console.log("dfs");
      console.log(y);
      console.log("ned");
      setclickedimage([...clickedimage, y]);
      setbackgroundimage(!backgroundimage);
    }
  }
  const phonenumber=(e)=>{
    const x=e.target.value;
    console.log(x);
    setphone(x);

  }
  const accessToken = localStorage.getItem("accesstoken");
  const savebtn=async(e)=>{
    const formData = new FormData()
    const data={
      selected_brand:brand,
      booked_date:booked,
      item_count:item,
      time_period:time,
      location:userlocation,
      problem_interval:problem,
      description:userdescription,
      booked_problem:state[0].booked_problem,
      // user:userid,
      image:image,
      phone_number:phone,
    }
    for (const key in data) {
      console.log("this is key",key);
      console.log("this is data",data[key]);
      formData.append(key, data[key]);
  }
  
  
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/v1/user/getbooking/${state[0].id}/`,
      {
        method: "PATCH",
        body: formData,
        headers: {
          // "Content-Type": "application/json",
          // Include the access token in the Authorization header
          "Authorization": `Bearer ${accessToken}`
      },
      }
    );

    // Check if the request was successful (status code 200-299)
    if (response.ok) {
      const responseData = await response.json(); // Parse response JSON
      console.log("create booking response",responseData);
      alert("Edited succesfully");
      // navigate("/category");

      //   // Log the response data
      //   navigate('/dashboard',{state:responseData});
    } else {
      console.error("Request failed with status:", response.status);
    }
  } catch (error) {
    console.error("Error:", error);
  }

  


  }
 
  return (
    <>
    </>
  )
}

export default EditBooking
