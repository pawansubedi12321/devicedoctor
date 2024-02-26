import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import {useLocation,useNavigate} from 'react-router-dom'
const ProblemList = () => {
  const { state } = useLocation();
  const[category,setcategory]=useState("");
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
// this is problem list
  console.log("hello",state);
  console.log("this is problem list",category);
  return (
    <div>
       
      <Navbar/>
      <div className='page'>
      <div className=' row savebtn'>
        <input className='save'onClick={addcategory} type="button"value="Add Category"/>
        </div>

      </div>
    </div>
  )
}

export default ProblemList