import React, { useState, useEffect ,useReducer } from 'react';
import Navbar from './navbar/Navbar';
import { useLocation, useNavigate } from 'react-router-dom'
import './css/booking.css';
import { useScrollTrigger } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ClearIcon from '@mui/icons-material/Clear';
import Eyefill from './assets/Eye-fill.svg';
// import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
const Booking = () => {
    const [booking, setbooking] = useState([]);
    // const {user,setuser}= useContext(UserContext);

    const navigate = useNavigate()

    // console.log('this is booking',booking);
    const accessToken = localStorage.getItem("accesstoken");
    useEffect(() => {


        const booking = async (e) => {

            const id = localStorage.getItem("id");
            const response = await fetch(`http://127.0.0.1:8000/api/v1/user/getbooking/${id}/`, {
                method: 'get',
                headers: {
                    // "Content-Type": "application/json",
                    // Include the access token in the Authorization header
                    "Authorization": `Bearer ${accessToken}`
                },

            })

            if (response.ok) {
                const responseData = await response.json(); // Parse response JSON
                setbooking(responseData);
                console.log("this is response Data", responseData);


            }
            else {
                console.error("Request failed with status:", response.status);
            }
        }
        booking();
    }, [])

    console.log("This is booking", booking);
    const [editdata, seteditdata] = useState();
    const [problem, setproblem] = useState();
    const edit = async (editid, booked_problem) => {
        // console.log("this is id",id);
        // console.log("this is bookedproblem",booked_problem);
        // console.log("tihis",e);
        const filter = booking.filter((item, index) => { return item.id === editid });
        console.log("this is edited id", filter);
        seteditdata(filter);

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/v1/user/editproblem/${booked_problem}/`, {
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
                console.log("this is responsedata", responseData);
                setproblem(responseData);
                // setuser(responseData);
            } else {
                console.error("Request failed with status:", response.status);
            }
        } catch (error) {
            console.error("Error:", error);
        }
        // navigate('/editbooking',{ state:filter});
    }

    console.log("this is booking", booking);
    console.log("this is problem", problem);
    console.log("this is editdata", editdata);


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
                    console.log("this is res", responseData);
                    // setcategory(responseData);
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
    // const x=booking.map((item)=>(
    //     console.log(item.location)
    // ))
    // console.log(x);
    // const Delete=(id)=>{
    //     const response = await fetch(`http://127.0.0.1:8000/api/v1/user/deletebooking/${id}/`, {
    //         method: "POST",
    //         body: JSON.stringify(datavalue),
    //         headers: {
    //           "Content-Type": "application/json",
    //         },


    //    }
    const Delete = async (id) => {

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/v1/user/deletebooking/${id}/`, {
                method: "DELETE",
                // body: JSON.stringify(datavalue),
                headers: {
                    // "Content-Type": "application/json",
                    // Include the access token in the Authorization header
                    "Authorization": `Bearer ${accessToken}`
                },
            });

            // Check if the request was successful (status code 200-299)
            if (response.ok) {
                const responseData = await response.json(); // Parse response JSON
                console.log(responseData);
                alert("deleteSuccesfully");
                // Log the response data
                // navigate("/dashboard", { state: responseData });
            } else {
                console.error("Request failed with status:", response.status);
                alert("password incorrect");
            }
        } catch (error) {
            console.error("Error:", error);
        }






        const response = await fetch(`http://127.0.0.1:8000/api/v1/user/getbooking/`, {
            method: 'get',
            headers: {
                // "Content-Type": "application/json",
                // Include the access token in the Authorization header
                "Authorization": `Bearer ${accessToken}`
            },

        })

        if (response.ok) {
            const responseData = await response.json(); // Parse response JSON
            setbooking(responseData);
            console.log("this is response Data", responseData);


        }
        else {
            console.error("Request failed with status:", response.status);
        }
    }
    const [brand, setbrand]=useState()
const[booked,setbooked]=useState("");
const[phone,setphone]=useState('');
const[userdescription,setuserdescription]=useState("");
const[userlocation,setuserlocation]=useState("");
    const selectedbrand=(e)=>{
        const x=e.target.value;
        console.log("this is brand",x);
        setbrand(x);
        
      
      }
      const bookeddate=(e)=>{
        const x=e.target.value;

        console.log("this isbooked date",x);
        setbooked(x);
        // console.log("this is bokked date",x);
      
      }
      const initialState2 = {
        time: ""
      }
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
      
      
      
      const [time, dispatch2] = useReducer(reducer2, initialState2);

      const initialState3 = {
        probleminterval: ""
      }
      const reducer3 = (state, action) => {
        switch (action.type) {
          case 'Recently':
            return { ...state, probleminterval: 'Recently' }; // Return updated state object
          case 'More than month':
            return { ...state, probleminterval: 'More than month' };
          case 'More than year':
            return { ...state, probleminterval: 'More than year' };
      
          case 'RESET_TIME':
            return { ...state, probleminterval: '' }; // Reset time to empty string
          default:
            return state;
        }
      }
      const [probleminterval, dispatch3] = useReducer(reducer3, initialState3);

      const phonenumber=(e)=>{
        const x=e.target.value;
        console.log(x);
        setphone(x);
      
      }
      
      const description=(e)=>{
        const x=e.target.value;
        setuserdescription(x);
        
      }
      const location=(e)=>{
        const x=e.target.value;
        setuserlocation(x);
      }
      useEffect(() => {
        if (editdata && editdata[0] && editdata[0].selected_brand) {
            setbrand(editdata[0].selected_brand);
        }
        if(editdata && editdata[0]&&editdata[0].booked_date){
            setbooked(editdata[0].booked_date)
        }
        if(editdata&& editdata[0]&&editdata[0].location)
            {
                setuserlocation(editdata[0].location)
            }
        if(editdata&& editdata[0]&&editdata[0].phone_number)
            {
                setphone(editdata[0].phone_number)

            }
        if(editdata&& editdata[0]&&editdata[0].time_period)
            {
                dispatch2({ type: editdata[0].time_period }); 
            }
        if(editdata&& editdata[0]&&editdata[0].problem_interval)
            {
                dispatch3({type: editdata[0].problem_interval })
            }

      }, [editdata]);
      console.log("this is brand",brand);
      console.log("this is time.time",time.time);
      console.log("this is ",editdata)

    const Edit = async () => {
        console.log("this is brand", brand);
        console.log("ths is date", booked);
        console.log("this is phone", phone);
        console.log("description", userdescription);
        console.log("this is time", time.time);
        console.log("this is probleminterval", probleminterval.probleminterval);
        console.log("this is userlocation", userlocation);
        console.log("This is bookedproblem", editdata[0].booked_problem);
    
        try {
            const datavalue = {
                selected_brand: brand,
                booked_date: booked,
                time_period: time.time,
                location: userlocation,
                problem_interval: probleminterval.probleminterval,
                description: userdescription,
                booked_problem: editdata[0].booked_problem,
                phone_number: phone,
            };
    
            const response = await fetch(`http://127.0.0.1:8000/api/v1/user/getbooking/${editdata[0].id}/`, {
                method: 'PATCH',
                body: JSON.stringify(datavalue),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`,
                },
            });
    
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                alert("Edited successful");
            } else {
                const errorData = await response.json();
                console.error("Request failed with status:", response.status, errorData);
                alert("Booking unsuccessful");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while making the request");
        }
    };
   
    const[showproblem,setshowproblem]=useState();
    const show=async(bookingid)=>{
        console.log("this is id",bookingid);
        console.log("thsi is booking in show",booking)
        const showbooking=booking.filter((item,index)=>item.id===bookingid)
        console.log("this is showbooking",showbooking);
        console.log("this is problem",showbooking[0].booked_problem)
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/v1/user/editproblem/${showbooking[0].booked_problem}/`, {
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
                // setshowproblem(responseData);
                const data={
                    'showbooking':showbooking,
                    'showproblem':responseData
                }
                console.log("this is data",data);
                navigate('/showbooking',{state:data})
                // setcategory(responseData);
                // setuser(responseData);
            } else {
                console.error("Request failed with status:", response.status);
            }
        } catch (error) {
            console.error("Error:", error);
        }



    }
    

    return (
        <>
            <div className='row categorypage'>
                {/* <VisibilityRoundedIcon/> */}
                <div className='col-md-3'>
                    <Navbar />
                </div>

                <div className='col-md-9 booking-list'>
                    {
                        booking.map((item, index) => (
                            <div className='col-md-12 list  '>
                                <div className='row'>
                                    {/* <div className='col-md-1 booking-image image'>
                                        <img className='booking-im' src={`http://127.0.0.1:8000/${item.image}`} alt="image" />
                                    </div> */}
                                    <div className='col-md-3 details'>
                                        <div>Location:{item.location}</div>
                                        <div>Problem_interval:{item.problem_interval}</div>
                                        <div>Time Period:{item.time_period}</div>


                                    </div>

                                    <div className='col-md-3 status'>
                                        <div className={`${item.status === 'appoint' ? 'appoint' : ''}
                          ${item.status === 'pending' ? 'pending' : ''}
                                ${item.status === 'onwork' ? 'onwork' : ''}
                                ${item.status === 'completed' ? 'completed' : ''} `}>
                                            Status:{item.status}
                                        </div>

                                    </div>

                                    <div className='col-md-2 showpage'>
                                        <div onClick={() => edit(item.id, item.booked_problem)} data-bs-toggle="modal" data-bs-target="#bookingexampleModal" className=' show-detail edit edit-category'>
                                            <ModeEditIcon />
                                        </div>






                                        <div className="modal fade" id={"bookingexampleModal"} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-xl modal-dialog" >
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Create Booking</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                                                     

                                                    </div>
                                                    <div className="modal-body">
                                                        <div className='row'>
                                                            <div className='col-md-6'>
                                                                <div>
                                                                    <img src={`http://127.0.0.1:8000/${problem=== undefined ? "" : problem[0].image}`} className='problemimage' alt='Slider1' />
                                                                </div>
                                                                <div className='problemname'>
                                                                    {problem=== undefined ? "" : problem[0].name}
                                                                </div>


                                                                <div className='problem-description'>
                                                                    <p>{problem==undefined?"":problem[0].short_description}</p>
                                                                </div>
                                                                
                                                                <div className=''>
                                                                  Time:  {problem===undefined?"":problem[0].price}Rs
                                                                </div>
                                                                


                                                                <label>

                                                                </label>
                                                            </div>
                                                            <div className='col-md-6'>
                 <form>
                
                 
                 
  <input type="text" onChange={selectedbrand} defaultValue={editdata===undefined?"":editdata[0].selected_brand} className=" brand " placeholder="Do write your brands" aria-label="Username" aria-describedby="basic-addon1"/>
  <label className='date'>Date:</label>
  <input onChange={bookeddate}defaultValue={editdata===undefined?"":editdata[0].booked_date} className='brand'type='date'/>
  </form>

  <p className='displaytime'>Time:</p>
                  <div className='margin-left Time_period'>

                    <div className={`${editdata===undefined?"":editdata[0].time_period==='9amto11pm'?'click':""} ${time.time === '9amto11pm' ? "clicked" : ""} period`} onClick={() => dispatch2({ type: '9amto11pm' })}>
                      9:00Am to 11Am
                    </div>
                    <div className={`${editdata===undefined?"":editdata[0].time_period==='12amto2pm'?'click':""}${time.time === '12amto2pm' ? "clicked" : ""} period`} onClick={() => dispatch2({ type: '12amto2pm' })}>
                      12:AM to 2PM
                    </div>
                    <div className={`${editdata===undefined?"":editdata[0].time_period==='2amto2pm'?'click':""}${time.time === '2amto2pm' ? "clicked" : ""} period`} onClick={() => dispatch2({ type: '2amto2pm' })}>
                      2:AM to 2PM
                    </div>
                    <div className={`${editdata===undefined?"":editdata[0].time_period==='2pmto4pm'?'click':""} ${time.time === '2pmto4pm' ? "clicked" : ""} period`} onClick={() => dispatch2({ type: '2pmto4pm' })}>
                      2:PM to 4PM
                    </div>
                    <div className={`${editdata===undefined?"":editdata[0].time_period==='4pmto6pm'?'click':""}${time.time === '4pmto6pm' ? "clicked" : ""} period`} onClick={() => dispatch2({ type: '4pmto6pm' })}>
                      4:PM to 6PM
                    </div>
                  </div>
                  

                  <input type="text"onChange={location} defaultValue={editdata===undefined?"":editdata[0].location} className=" brand location " placeholder="Enter your location" aria-label="Username" aria-describedby="basic-addon1"/>


                  <h1 className='displaytime'>Problem Interval</h1>
                    <div className='margin-left probleminterval'>
                      <div className={`${editdata===undefined?"":editdata[0].problem_interval==='Recently'?'click':""}${probleminterval.probleminterval === 'Recently' ? 'clicked' : ""} period`} onClick={() => dispatch3({ type: 'Recently' })}>
                        Recently
                      </div>
                      <div className={`${editdata===undefined?"":editdata[0].problem_interval==='More than month'?'click':""}${probleminterval.probleminterval === 'More than month' ? 'clicked' : ""} period`} onClick={() => dispatch3({ type: 'More than month' })}>
                        More than month
                      </div>
                      <div className={`${editdata===undefined?"":editdata[0].problem_interval==='More than year'?'click':""}${probleminterval.probleminterval === 'More than year' ? 'clicked' : ""} period`} onClick={() => dispatch3({ type: 'More than year' })}>
                        More than Year
                      </div>

                    </div>
                    

                    <input type="text"  onChange={description}  defaultValue={editdata===undefined?"":editdata[0].description}className=" brand location " placeholder="Description" aria-label="Username" aria-describedby="basic-addon1"/>
                    <input type="text"onChange={phonenumber} defaultValue={editdata===undefined?"":editdata[0].phone_number}className=" brand location " placeholder="phonenumber" aria-label="Username" aria-describedby="basic-addon1"/>
                    <button type="button"onClick={Edit} className=" btn-btn-primary brand margin-top col-md-6 col-sm-6 col-6 booked-btn btn-primary"><span className='book'>Edit</span></button>


                
              </div>

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='delete show-detail delete-category' onClick={() => Delete(item.id)}>
                                            < ClearIcon />
                                        </div>

                                        <div className='delete show-detail delete-category' onClick={() => show(item.id)}>
                                        <img src={Eyefill}/>
                                            {/* <ClearIcon /> */}
                                          
                                        </div>
                                    </div>


                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* <div className='container-fluid booking-xxs'>
        <div className='row booking-list'>
            {
                booking.map((item,index)=>(
                    <div className='col-md-12 list  '>
                        <div className='row'>
                        <div className='col-md-1 booking-image image'>
                            <img className='booking-im' src={`https://pawan2221.pythonanywhere.com/${item.image}`}alt="image"/>
                            </div>  
                        <div className='col-md-3 details'>
                            <div>Location:{item.location}</div>
                            <div>Problem_interval:{item.problem_interval}</div>
                            <div>Time Period:{item.time_period}</div>
                            </div>

                            <div className='col-md-3 status'>
                                <div className={`${item.status==='appoint'?'appoint':''}
                                ${item.status==='pending'?'pending':''}
                                ${item.status==='onwork'?'onwork':''}
                                ${item.status==='completed'?'completed':''}
                                `}>
                                    Status:{item.status}
                                    </div>

                                </div> 

                            <div className='col-md-3 receptionname'>
                                <div>AssistantName:pawan</div>
                                </div>
                            
                            <div className='col-md-2 showpage'>
                                
                                 <div onClick={()=>edit(item.id,item.booked_problem)} className='edit edit-category'>
            <ModeEditIcon/>
                </div>
        <div className='delete delete-category'onClick={()=>Delete(item.id)}>
          <ClearIcon/>
        </div>
                                </div>



                            
                            
                            </div>  
                   </div>

                ))
            }
        </div>
    </div> */}
        </>
    )
}
export default Booking