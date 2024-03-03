import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import {useLocation,useNavigate} from 'react-router-dom'
import './problemList.css';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CloseIcon from '@mui/icons-material/Close';
const ProblemList = () => {
  const { state } = useLocation();
  const[category,setcategory]=useState([]);
  const navigate=useNavigate()
  const addcategory=()=>{
    navigate('/addproblem',{state:state});
}
useEffect(()=>{
  const problemlist=async()=>{
    const response=await fetch(`http://127.0.0.1:8000/api/v1/user/getproblem/${state}/`,{
    method:'get',

})

if(response.ok)
{
    const responseData = await response.json(); // Parse response JSON
    setcategory(responseData);
  

}
else {
        console.error("Request failed with status:", response.status);
      }
  }
  problemlist()

},[])
const createbooking=()=>{
  navigate('/createbooking');
}
// this is problem list
  console.log("hello",state);
  console.log("this is problem list",category);
  return (
    <div>
       
      <Navbar/>
      <div className='page'>
      <div className=' row savebtn'>
        <input className='save'onClick={addcategory} type="button"value="Add problem"/>
        </div>
        {
          
          category.map((item)=>(
        
          <div className='col-md-12 list'>
            <div className='row problem-list'>
            <div className='col-md-1 image'>
              <img src={item.image}alt='image'/>
            </div>

            <div className='col-md-5 description'>
              <div className='problemname'> {item.name}</div>
              </div>

              <div className='col-md-1 showtime'>
                <div className='time'>Time:{item.est_time}hrs</div>
                </div>
              
              <div className='col-md-1 showprice'>
                <div className='price'>Price:{item.price}</div>
                </div>
                <div className='col-md-1 editanddelete'>
                <div className='edit'>
                <ModeEditIcon/>
                </div>
                <div className='delete'>
                  <CloseIcon/>
                  </div>
              
                </div>

                <div className='col-md-3 createbooking'>
                  <button className='createbookingbtn'onClick={createbooking}>Createbooking</button>
                  
                  </div>
            </div>

              
          </div>


          ))
        }
        
        {/* <div className='list'></div> */}
      </div>
    </div>
  )
}

export default ProblemList