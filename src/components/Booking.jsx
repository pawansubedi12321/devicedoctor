import React,{useState,useEffect,useContext} from 'react';
import Navbar from './navbar/Navbar';
import {useLocation,useNavigate} from 'react-router-dom'
import './css/booking.css';
import {UserContext} from './../App';
import { useScrollTrigger } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
const Booking = () => {
    const [booking,setbooking]=useState([]);
    const {user,setuser}= useContext(UserContext);
    
    const navigate=useNavigate()

    // console.log('this is booking',booking);
    useEffect(()=>{
        

        const savecategorybtn = async (e) => {
        
            const x = localStorage.getItem("id");
            const response=await fetch(`http://127.0.0.1:8000/api/v1/user/getbooking/${x}/`,{
                method:'get',
        
            })
            
            if(response.ok)
            {
                const responseData = await response.json(); // Parse response JSON
                setbooking(responseData);
                console.log("this is response Data",responseData);
              

            }
            else {
                    console.error("Request failed with status:", response.status);
                  }
        }
        savecategorybtn();
    },[])
    // useEffect(()=>{
    //     console.log("show has been updated",show);
    // },[show,setshow])
    
    const showbooking=async(booked_problem,id)=>{
        console.log("this is booking",booked_problem);
        const response=await fetch(`https://pawan12.pythonanywhere.com/api/v1/user/showproblem/`,{
            method:'get',
    
        })
        if(response.ok)
            {
                const responseData = await response.json(); // Parse response JSON
                console.log("this is without filter",responseData);
                const bookedproblem=responseData.filter((show)=>show.id===booked_problem);
                console.log("this is bookedproblem",bookedproblem);
                const book=booking.filter((show)=>show.id===id)
                console.log("this is booking",book);
                console.log("this is id",id);
                const data={
                    bookedproblem:bookedproblem,
                    book:book
                }
                navigate('/showbooking',{state:data});
                
                
                // setbookig(responseData);
                // setshow(data);
                
              

            }
            else {
                    console.error("Request failed with status:", response.status);
                  }
                 
                //   
                
                  

    }
   
    console.log("this is booking",booking);
    // const x=booking.map((item)=>(
    //     console.log(item.location)
    // ))
    // console.log(x);

  return (
    <>
    <Navbar/>
    <div className='container-fluid booking-xxs'>
        <div className='row booking-list'>
        
            {
                booking.map((item,index)=>(
                    <div className='col-md-12 list  '>
                        <div className='row'>
                        <div className='col-md-1 booking-image image'>
                            <img src={item.image}alt="image"/>
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
                                <div>Receptionname:9823576196</div>
                                </div>
                            
                            <div className='col-md-2 showpage'>
                                <div className='show-booking'onClick={()=>showbooking(item.booked_problem,item.id)}>
                                    <VisibilityIcon/>
                                 </div>
                                </div>



                            
                            
                            </div>  
                   </div>

                ))
            }
        </div>
    </div>
    </>
  )
}
export default Booking