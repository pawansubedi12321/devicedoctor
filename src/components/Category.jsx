import React, { useEffect, useState } from 'react'
import Navbar from './navbar/Navbar'
import './css/Category.css'
import {useNavigate} from 'react-router-dom'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ClearIcon from '@mui/icons-material/Clear';
import { Fetchcategoryapi } from './api/Api';
const Category = () => {
    const[category,setcategory]=useState([]);
    const navigate=useNavigate();
    const addcategory=(e)=>{
        navigate('/addcategory');
       

    }

    // const x = localStorage.getItem("id");
   const accessToken = localStorage.getItem("accesstoken");

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(Fetchcategoryapi(), {
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
                setcategory(responseData); // Assuming setCategory is a state setter function
            } else {
                console.error("Request failed with status:", response.status);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    fetchData(); // Call the fetchData function

}, [accessToken]);
  
 
      console.log("this is category",category);

     const imageClicked=(ind)=>{
        // console.log(e);
        navigate('/problem',{state:ind});

     }
     
    
     const baseURL = 'http://localhost:5173/';
  return (
    <div>
    
         <div className='categorypage'>
         <Navbar/>
         <div className='row imagesection'>
         {
        category.message==='Category not found'?"":category.map((item,index)=>(
            <>
           
                <div className='categoryimage'>
                <img src={`http://127.0.0.1:8000/${item.image}`}className='category-emptyimg'onClick={()=>imageClicked(item.id)}alt=''/>
                <div className='category-image-name'>{item.name}</div>
                </div>
            </>
            
            ))
        }

         </div>
         </div>
        {/* 
        <div className='page'>
        <div className='row imagesection'>
        
        
        </div>

        <div className=' row savebtn'>
        <input className='save'onClick={addcategory} type="button"value="Add Category"/>
        </div>
        
        </div> */}
    </div>
  )
}

export default Category