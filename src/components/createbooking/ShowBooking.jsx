import React from 'react'
import Navbar from '../navbar/Navbar'
import './showbooking.css';
import {useLocation,useNavigate} from 'react-router-dom'
const ShowBooking = () => {
    const { state } = useLocation();
    console.log("this is show booking state",state);
    console.log("this is booking list",state.bookedproblem);
  return (
    <>
    <Navbar/>
    <div className='page'>
        <h1>Booking List</h1>
    {
                state.book.map((item)=>(
                    <table  className='showbooking-table'>
           
        
            <tr>
            <th colSpan="">image</th>
              <th colSpan="">booked_date</th>
              <th colSpan="">description</th>
              
              <th colSpan="">item_count</th>
              <th>location</th>
              <th>problem_interval</th>
              <th>Selected_brand</th>
              <th>Status</th>
              <th>time_period</th>
            </tr>
            <tr>
                <td>{item.image}</td>
                <td>{item.booked_date}</td>
                <td>{item.description}</td>
                
                <td>{item.item_count}</td>
                <td>{item.location}</td>
                <td>{item.problem_interval}</td>
                <td>{item.selected_brand}</td>
                <td>{item.status}</td>
                <td>{item.time_period}</td>
                
            </tr>
            
        
        
        </table>
                    
                ))
            }
        
        <h1>
            Problem List
        </h1>
        {
            state.bookedproblem.map((item)=>(
                <table>
                    <tr>
                        <th>image</th>
                        <th>name</th>
                        <th>price</th>
                        <th>short_description</th>
                        <th>Est_time</th>
                        
                    </tr>
                    <tr>
                        <th>{item.image}</th>
                        <th>{item.name}</th>
                        <th>{item.price}</th>
                        <th>{item.short_description}</th>
                        <th>{item.est_time}</th>
                    </tr>
                </table>
            ))
        }
      </div>
    </>
  )
}

export default ShowBooking