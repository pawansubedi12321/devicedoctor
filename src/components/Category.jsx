import React, { useEffect, useState } from 'react'
import Navbar from './navbar/Navbar'
import './css/Category.css'
import {useNavigate} from 'react-router-dom'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ClearIcon from '@mui/icons-material/Clear';
const Category = () => {
    const[category,setcategory]=useState([]);
    const navigate=useNavigate();
    const addcategory=(e)=>{
        navigate('/addcategory');
       

    }
    const x = localStorage.getItem("id");
    useEffect(() => {
        // Fetch image data from API
        fetch(`https://pawan2221.pythonanywhere.com/api/v1/user/getcategory/${x}/`) // Replace 'API_ENDPOINT' with your actual API URL
          .then(response => response.json())
          .then(data => {
           
            setcategory(data);
          })
          .catch(error => {
            console.error('Error fetching image data:', error);
          });
      }, []); // Empty dependency array ensures useEffect runs only once on component mount
         
      
      
      // if(category.message==='Category not found')
      // {
      //   console.log("not found");
      // }
      // else{
      //   console.log("found");
      // }
      console.log("this is category",category);

     const imageClicked=(ind)=>{
        // console.log(e);
        navigate('/problemlist',{state:ind});

     }
     const editcategory=(id)=>{
     
      const x=category.filter((item,index)=>{
        return item.id===id
      })
      
      navigate('/editcategory',{state:x});
      
     }
     const deletecategory=async(item)=>{
      try {
        const response = await fetch(`https://pawan2221.pythonanywhere.com/api/v1/user/getcategory/${item}/`, {
            method: "DELETE",
        });
        
        if (!response.ok) {
            throw new Error("Delete failed"); // Handle error response
        }
        
        console.log("Category deleted successfully");
        
        // Redirect user or perform further actions
    } catch (error) {
        console.error("Error:", error);
        // Handle error
    }

    fetch(`https://pawan2221.pythonanywhere.com/api/v1/user/getcategory/${x}/`) // Replace 'API_ENDPOINT' with your actual API URL
          .then(response => response.json())
          .then(data => {
           
            setcategory(data);
          })
          .catch(error => {
            console.error('Error fetching image data:', error);
          });
     }
    

  return (
    <div>
        <Navbar/>
        <div className='page'>
        <div className='row imagesection'>
        
        {
        category.message==='Category not found'?"":category.map((item,index)=>(
            <>
           
                <div className='categoryimage'>
                <div className='edit edit-category'onClick={()=>editcategory(item.id)}>
            <ModeEditIcon/>
                </div>
        <div className='delete delete-category'onClick={()=>deletecategory(item.id)}>
          <ClearIcon/>
        </div>
                
                
                <img src={`https://pawan2221.pythonanywhere.com/${item.image}`}className='category-emptyimg'onClick={()=>imageClicked(item.id)}alt=''/>
                <div className='category-image-name'>{item.name}</div>
                
                </div>
                
                
            </>
            
            ))
        }
        </div>

        <div className=' row savebtn'>
        <input className='save'onClick={addcategory} type="button"value="Add Category"/>
        </div>
        
        </div>
    </div>
  )
}

export default Category