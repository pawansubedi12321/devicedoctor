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
       
       <Navbar/>
       <div className='dashboardpage'>

       </div>

      
  </div>
  )
}

export default Dashboard