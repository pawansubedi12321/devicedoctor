import React, { useState ,useEffect} from 'react';
import './createbooking.css';
import Navbar from '../navbar/Navbar';
import Image from './assets/img.png';
import { UNSAFE_DataRouterStateContext } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const createbooking = () => {
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
      booked_problem:state,
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
      "http://127.0.0.1:8000/api/v1/user/createbooking/",
      {
        method: "POST",
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
      alert("booked succesfully");
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
     <div className=' categorypage'>
      <div className='row'>
      <div className='col-md-3'>
      <Navbar/>

      </div>
     <div className='col-md-9 problemlist'>
         {/* <h1>Problem Details</h1> */}
          
          <img  className='problemimage'src={`http://127.0.0.1:8000/${state[0].image}`}/>
        <div className='problemdetails'>
          <h1>Problem Details</h1>
        <h1 className=''>Problem Name:{state[0].name}</h1>
        
        <h1 className=''>price:{state[0].price}</h1>
        <h1 className=''>est_time:{state[0].est_time}</h1>
        <h1 className=''>ShortDescription:{state[0].short_description}</h1>
        </div> 
     </div>
     </div>
     </div>
    {/* <Navbar/>
    <div className='container-fluid container-xxs'>
        <div className='createbookingpage'>
          <div className='row'>
          <div className='col-md-12   gx-lg-5 booking-header'>
            
            <div className='backbutton'>
              <input type="button"className="bookingbackbutton"value="Back"/>
            </div>
            <div className='booking-title'>
              Create Booking
            </div>
            <div className='crossbtn'>
              

            </div>
          </div>
          </div>
        
            <div className='row'>
              <div className='col-md-7 brandtext   gx-lg-5'>
                <div className='selected_brand'>Selected_brand</div>
                <input type="text"onChange={selectedbrand} className='brand'placeholder='Type-here...'/>

              </div>
              

              <div className='col-md-7 brandtext gx-lg-5'>
                <div className='selected_brand'>booked_date</div>
                <input type="date"onChange={bookeddate}className='brand'placeholder='2020-02-12'/>

              </div>
              <div className='col-md-4 create-booking-image'>
                <input type='file'onChange={file} className='create-booking-file'/>
                <img src={Image}alt='image'className='create-booking-img'/>
                {backgroundimage ? (
                <img src={clickedimage} className="show-booking-image" />
              ) : (
                ""
              )}

</div>

              <div className='col-md-7 brandtext gx-lg-5'>
                <div className='selected_brand'>item_count</div>
                <input type="text"onChange={itemcount}className='brand'placeholder='Type-here...'/>

              </div>

              <div className='col-md-7 brandtext gx-lg-5'>
                <div className='selected_brand'>time_period</div>
                <input type="text"onChange={timeperiod}className='brand'placeholder='10-12'/>

              </div>

              <div className='col-md-7 brandtext gx-lg-5'>
                <div className='selected_brand'>location</div>
                <input onChange={location} type="text"className='brand'placeholder='Type-here'/>

              </div>

              <div className='col-md-7 brandtext gx-lg-5'>
                <div className='selected_brand'>problem_interval</div>
                <input onChange={probleminterval} type="text"className='brand'placeholder='2 weeks'/>

              </div>

              <div className='col-md-7 brandtext gx-lg-5'>
                <div className='selected_brand'>description</div>
                <input onChange={description} type="text"className='brand'placeholder='description'/>

              </div>
              <div className='col-md-7 brandtext gx-lg-5'>
                <div className='selected_brand'>Phone_number</div>
                <input onChange={phonenumber} type="text"className='brand'placeholder='phone_number'/>

              </div>

              <div className='col-md-4 savebtn'>
                <input onClick={savebtn} className='createbooking-save' type="button"value="Save"/>
              </div>
             
            
              
            </div>
        </div>
    </div> */}
    </>
  )
}

export default createbooking
