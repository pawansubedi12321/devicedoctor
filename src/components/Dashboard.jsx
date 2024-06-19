import React,{useState,useEffect} from 'react'
import Navbar from './navbar/Navbar'
import './css/Dashboard.css';
const Dashboard =() => {
    // const response = await fetch("http://127.0.0.1:8000/api/v1/user/login/", {
    //     method: 'POST',
        
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // });
    // if (response.ok) {
    //     const responseData = await response.json(); 
    //     console.log(responseData); ;
    //   } else {
    //     console.error('Request failed with status:', response.status);
    //   }

    // useEffect(() => {
    //     const fetchData = async (e) => {
    //         try {
    //             const token = localStorage.getItem('accesstoken');
    //             const response = await fetch('http://127.0.0.1:8000/api/v1/user/login/', {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json',
                      
    //                 },
                    
    //             });
    //             console.log("THis is response",response);
        
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             console.log("this is response");
    //             const responseData = await response.json();
    //             console.log(responseData);
    //             console.log("end");
    //             // setUserData(responseData.data);
    //         } catch (error) {
    //             console.log(error);
    //             // setError(error.message);
    //         }
    //     };

    //     fetchData();
    // }, []);

   

   
  return (
    <div>
       
       
       <div className='row dashboardpage'>
        <div className='col-md-3'>
        <Navbar/>

        </div>
        <div className='col-md-9 dash-img-3e'>
                 
       <img className='welcome-image' src='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXE0NXhpYW55YzRjZm1jbnczMWs2dTlpbmY1djQ0cGt6eDV0cXBmNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dHM/4N3Mqhl8JRyYLapZgt/giphy.gif'/>

        </div>
      


       </div>

      
  </div>
  )
}

export default Dashboard