import React from 'react'
import Navbar from '../navbar/Navbar'
import './showbooking.css';
import {useLocation,useNavigate} from 'react-router-dom'
const ShowBooking = () => {
    const { state } = useLocation();
    console.log("this is show booking state",state);
    // console.log("this is booking list",state.bookedproblem);
    console.log("state.showbooking",state.showbooking)

  return (
    <>
    <div className='row dashboardpage'>
    <div className='col-md-3'> 
          <Navbar/>
          </div>
          <div className='col-md-9'>
          <h1>Booking List</h1>
          {
            state.showbooking.map((item,index)=>(
                <table>
                     <tr>
                     {/* <th>Image</th> */}
            <th >booked_date</th>
            <th colSpan="">description</th>
              
            {/* <th colSpan="">item_count</th> */}
            <th>location</th>
            <th>problem_interval</th>
            <th>Selected_brand</th>
            <th>Status</th>
            <th>time_period</th>
            <th>Phone_number</th>
                    
                </tr>



                <tr>
                {/* <td><img className='showbooking-img' src={`http://127.0.0.1:8000/${item.image}`}/></td> */}
                 <td>{item.booked_date}</td>
                <td>{item.description}</td>
                
               {/* <td>{item.item_count}</td> */}
                <td>{item.location}</td>
                <td>{item.problem_interval}</td>
                <td>{item.selected_brand}</td>
                <td>{item.status}</td>
                <td>{item.time_period}</td>
                <td>{item.phone_number}</td>
                
            </tr>
                </table>
            ))
          }

<h1>
            Problem List
        </h1>

        {
            state.showproblem.map((item)=>(
                <table>
                    <tr>
                        <th>image</th>
                        <th>name</th>
                        <th>price</th>
                        <th>short_description</th>
                        {/* <th>Est_time</th> */}
                        
                    </tr>
                    <tr>
                        <td><img className="problemlist-img"src={`http://127.0.0.1:8000/${item.image}`}/></td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.short_description}</td>
                        {/* <td>{item.est_time}</td> */}
                    </tr>
                </table>
            ))
        }

          </div>

    </div>
    
    {/* <div className='page'>
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
              <th>Phone_number</th>
            </tr>
            <tr>
                <td><img className='showbooking-img' src={`https://pawan2221.pythonanywhere.com/${item.image}`}/></td>
                <td>{item.booked_date}</td>
                <td>{item.description}</td>
                
                <td>{item.item_count}</td>
                <td>{item.location}</td>
                <td>{item.problem_interval}</td>
                <td>{item.selected_brand}</td>
                <td>{item.status}</td>
                <td>{item.time_period}</td>
                <td>{item.phone_number}</td>
                
            </tr>
            
        
        
        </table>
                    
                ))
            }
        
        <h1>
            Problem List
        </h1>
        
      </div> */}
    </>
  )
}

export default ShowBooking