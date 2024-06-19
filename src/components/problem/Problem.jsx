import React, { useEffect, useState,useReducer} from 'react'
import Navbar from '../navbar/Navbar'
import {useLocation,useNavigate} from 'react-router-dom'
import './problemList.css';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CloseIcon from '@mui/icons-material/Close';
const Problem = () => {
    const { state } = useLocation();
  const[category,setcategory]=useState([]);
  const navigate=useNavigate()
  console.log("this is state",state);
  


  // const {setuser}= useContext(UserContext);
  const addcategory=()=>{
    navigate('/addproblem',{state:state});
}
const accessToken = localStorage.getItem("accesstoken");

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/v1/user/getproblem/${state}/`, {
                method: "get",
                // body: JSON.stringify(datavalue),
                headers: {
                    "Content-Type": "application/json",
                    // Include the access token in the Authorization header
                    "Authorization": `Bearer ${accessToken}`
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log("this is responsedata",responseData);
                setcategory(responseData);
                // setuser(responseData);
            } else {
                console.error("Request failed with status:", response.status);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    fetchData(); // Call the fetchData function

}, [accessToken]);
const[problemlist,setproblemlist]=useState();
const createbooking=(item)=>{
  console.log("this is item",item);
  const result =category.filter((data) =>data.id === item);
  setproblemlist(result);
  
  console.log("this is result",result);
  console.log("this is item",item);
  // navigate('/createbooking',{state:result});
  // console.log("this is problemlist",category);
}
console.log("this is problemlsit",problemlist);
const reducer2 = (state, action) => {
  switch (action.type) {
    case '9amto11pm':
      return { ...state, time: '9amto11pm' }; // Return updated state object
    case '12amto2pm':
      return { ...state, time: '12amto2pm' };
    case '2amto2pm':
      return { ...state, time: '2amto2pm' };
    case '2pmto4pm':
      return { ...state, time: '2pmto4pm' };
    case '4pmto6pm':
      return { ...state, time: '4pmto6pm' };
    case 'RESET_TIME':
      return { ...state, time: '' }; // Reset time to empty string
    default:
      return state;
  }
}
const initialState2 = {
  time: ""
}


const [time, dispatch2] = useReducer(reducer2, initialState2);


const initialState3 = {
  probleminterval: ""
}
const reducer3 = (state, action) => {
  switch (action.type) {
    case 'Recently':
      return { ...state, probleminterval: 'Recently' }; // Return updated state object
    case 'Morethanmonth':
      return { ...state, probleminterval: 'More than month' };
    case 'Morethanyear':
      return { ...state, probleminterval: 'More than year' };

    case 'RESET_TIME':
      return { ...state, probleminterval: '' }; // Reset time to empty string
    default:
      return state;
  }
}
const [probleminterval, dispatch3] = useReducer(reducer3, initialState3);
const [brand, setbrand]=useState("")
const[booked,setbooked]=useState("");
const[userlocation,setuserlocation]=useState("");
const[phone,setphone]=useState('');
const[userdescription,setuserdescription]=useState("");
const selectedbrand=(e)=>{
  const x=e.target.value;
  setbrand(x);
  

}
const bookeddate=(e)=>{
  const x=e.target.value;
  console.log("this isbooked date",x);
  setbooked(x);
  // console.log("this is bokked date",x);

}
const location=(e)=>{
  const x=e.target.value;
  setuserlocation(x);
}
const phonenumber=(e)=>{
  const x=e.target.value;
  console.log(x);
  setphone(x);

}

const description=(e)=>{
  const x=e.target.value;
  setuserdescription(x);
  
}
console.log("brand",brand);
console.log('bookeddate',booked);
console.log("userlocation",userlocation);
console.log("phone",phone);
console.log("description",userdescription);
console.log("time",time.time);
console.log("probleminterval",probleminterval.probleminterval);

console.log("this is problem list",problemlist);

//time= time.time
const book=async()=>{

    // e.preventDefault();
    try {
      const datavalue = {
        selected_brand:brand,
        booked_date:booked,
        time_period:time.time,
        location:userlocation,
        problem_interval:probleminterval.probleminterval,
        description:userdescription,
        booked_problem:problemlist[0].id,
        phone_number:phone


      };
      const response = await fetch('http://127.0.0.1:8000/api/v1/user/createbooking/', {
        method: "POST",
        body: JSON.stringify(datavalue),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        },
      });

      // Check if the request was successful (status code 200-299)
      if (response.ok) {
        const responseData = await response.json(); // Parse response JSON
        console.log(responseData);
        alert("booking successfull");
        navigate('/booking');
        // navigate("/dashboard", { state: responseData });
      } else {
        console.error("Request failed with status:", response.status);
        alert("booking unsuccessfull");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  

}

  return (
    <div>
        <div className='row categorypage'>
          <div className='col-md-3'> 
          <Navbar/>
          </div>
          <div className='col-md-9 cate'>
          {
        category.message==='Category not found'?"":category.map((item,index)=>(
            <>
           
                <div className=' categoryimage'>
                <img src={`http://127.0.0.1:8000/${item.image}`}className='category-emptyimg'onClick={()=>imageClicked(item.id)}alt=''/>
                <div className='category-image-name'>{item.name}</div>
                <button className='booknow'data-bs-toggle="modal" data-bs-target="#bookingexampleModal" onClick={()=>createbooking(item.id)}>Book Now</button>
                </div>
          
                
            </>
            
            ))
        }
        </div>

<div class="modal fade" id={"bookingexampleModal"} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-xl modal-dialog" >
        <div class="modal-content">
          <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Create Booking</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           
            {/* <h5 class="modal-title" id="exampleModalLabel">Service Title</h5> */}

          </div>
          <div class="modal-body">
            <div className='row'>
              <div className='col-md-6'>
                <div>
                  <img src={`http://127.0.0.1:8000/${problemlist===undefined?"":problemlist[0].image}`} className='problemimage' alt='Slider1' />
                </div>
                <div className='problemname'>
                  {problemlist===undefined?"":problemlist[0].name}
                </div>


                <div className='problem-description'>
                  <p>{problemlist===undefined?"":problemlist[0].short_description}</p>
                </div>
                {/* <div className='booking-time'>
                  <span className='esttime'>EstTime</span>:{problemlist===undefined?"":problemlist[0].est_time}hrs
                </div> */}
                <div className=''>
                  Price:{problemlist===undefined?"":problemlist[0].price}Rs
                </div>
                


                <label>

                </label>
              </div>
              <div className='col-md-6'>
                <form>
                {/* <div class="input-group mb-3"> */}
  {/* <span class="input-group-text" id="basic-addon1">@</span> */}
  <input type="text" onChange={selectedbrand} class=" brand " placeholder="Do write your brands" aria-label="Username" aria-describedby="basic-addon1"/>
  <label className='date'>Date:</label>
  <input onChange={bookeddate} class='brand'type='date'/>

  <p className='displaytime'>Time:</p>
                  <div className='margin-left Time_period'>

                    <div className={`${time.time === '9amto11pm' ? "clicked" : ""} period`} onClick={() => dispatch2({ type: '9amto11pm' })}>
                      9:00Am to 11Am
                    </div>
                    <div className={`${time.time === '12amto2pm' ? "clicked" : ""} period`} onClick={() => dispatch2({ type: '12amto2pm' })}>
                      12:AM to 2PM
                    </div>
                    <div className={`${time.time === '2amto2pm' ? "clicked" : ""} period`} onClick={() => dispatch2({ type: '2amto2pm' })}>
                      2:AM to 2PM
                    </div>
                    <div className={`${time.time === '2pmto4pm' ? "clicked" : ""} period`} onClick={() => dispatch2({ type: '2pmto4pm' })}>
                      2:PM to 4PM
                    </div>
                    <div className={`${time.time === '4pmto6pm' ? "clicked" : ""} period`} onClick={() => dispatch2({ type: '4pmto6pm' })}>
                      4:PM to 6PM
                    </div>
                  </div>

                  <input type="text"onChange={location} class=" brand location " placeholder="Enter your location" aria-label="Username" aria-describedby="basic-addon1"/>


                  <h1 className='displaytime'>Problem Interval</h1>
                    <div className='margin-left probleminterval'>
                      <div className={`${probleminterval.probleminterval === 'Recently' ? 'clicked' : ""} period`} onClick={() => dispatch3({ type: 'Recently' })}>
                        Recently
                      </div>
                      <div className={`${probleminterval.probleminterval === 'More than month' ? 'clicked' : ""} period`} onClick={() => dispatch3({ type: 'Morethanmonth' })}>
                        More than month
                      </div>
                      <div className={`${probleminterval.probleminterval === 'More than year' ? 'clicked' : ""} period`} onClick={() => dispatch3({ type: 'Morethanyear' })}>
                        More than Year
                      </div>

                    </div>

                    <input type="text"  onChange={description}  class=" brand location " placeholder="Description" aria-label="Username" aria-describedby="basic-addon1"/>
                    <input type="text"onChange={phonenumber} class=" brand location " placeholder="phonenumber" aria-label="Username" aria-describedby="basic-addon1"/>
                    <button type="button"onClick={book} class=" btn-btn-primary brand margin-top col-md-6 col-sm-6 col-6 booked-btn btn-primary"><span className='book'>Book</span></button>


                </form>
              </div>
              
            </div>

          </div>

        </div>
      </div>
    </div>


          </div>
          {/* </div>
          </div>
          {/* {
          category.map((item)=>(
            <div className='row'>
            <div className='col-md-9 list'>

            </div>
            </div>

              ))
        } */}
        
        

        {/* </div> */}
     
        {/* <div className='savebtn'> */}
        {/* <input className='save'onClick={addcategory} type="button"value="Add problem"/> */}
        

        {/* </div> */}

        {/* <div className=' row savebtn'>
      <input className='save'onClick={addcategory} type="button"value="Add problem"/>
      {
          
          category.map((item)=>(
        
          <div className='col-md-12 list'>
            <div className='row problem-list'>
            <div className='col-md-1 image'>
              <img className='problemlist-img' src={`https://pawan2221.pythonanywhere.com/${item.image}`}alt='image'/>
            </div>

            <div className='col-md-5 description'>
              <div className='problemname'> {item.name}</div>
              </div>

              <div className='col-md-1 showtime'>
                <div className='time'>Time:{item.est_time}</div>
                </div>
              
              <div className='col-md-1 showprice'>
                <div className='price'>Price:{item.price}</div>
                </div>
                <div className='col-md-3 createbooking'>
                  <button className='createbookingbtn'onClick={()=>createbooking(item.id)}>Createbooking</button>
                  </div>
            </div>

              
          </div> */}


          {/* ))
        }
        </div> */}
        </div>
   
  )
}

export default Problem