import React from 'react'

const EditCategory = () => {
  return (
    <div>EditCategory</div>
  )
}

export default EditCategory
// import React, { useState, useEffect } from "react";
// // import "./AddCategory.css";
// import Image from "./assets/img.png";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios'
// import { useLocation } from 'react-router-dom';
// const EditCategory = () => {
//   const {state}=useLocation();
//     const [clickimage, setclickimage] = useState("");
//   const [backgroundimage, setbackgroundimage] = useState(false);
//   const [categorytextstate, setcategorytextstate] = useState("");
//   const [imagewithouturl, setimagewithouturl] = useState("");
//   const[category,setcategory]=useState([]);
//   const[editname,seteditname]=useState([]);
//   const navigate = useNavigate();
//   console.log('this is state',state);


//   const imagefile = (e) => {
//     let x = e.target.files[0];

//     setimagewithouturl(x);

//     console.log("this is x");
//     console.log(x.name);
//     console.log(imagewithouturl);
//     console.log("this is end");
//     // setimg(x);
//     if (x) {
//       const y = URL.createObjectURL(x);
//       console.log("dfs");
//       console.log(y);
//       console.log("ned");

//       setclickimage([...clickimage, y]);
//       setbackgroundimage(!backgroundimage);
//     }
//   };
// //  console.log("this is image without url",imagewithouturl)
  
//   const categorytext = (e) => {
//     const x = e.target.value;
//     setcategorytextstate(x);
//   };
//   const user = localStorage.getItem("id");
//   const savecategorybtn=async()=>{

//     try {
//       const datavalue={
//         name:categorytextstate,
//         user:user,
//         image:imagewithouturl.name

//       }
//       const response = await fetch(`https://pawan2221.pythonanywhere.com/api/v1/user/getcategory/${state[0].id}/`, {
//           method: "PUT",
//           body: JSON.stringify(datavalue), // Assuming datavalue contains login data
//           headers: {
//               "Content-Type": "application/json",
//           },
//       });
      
//       if (!response.ok) {
//           throw new Error("Login failed"); // Handle error response
//       }
      
//       // Assuming the response contains some data after successful login
//       const responseData = await response.json();
      
//       // Handle the response data as needed
//       console.log(responseData);
      
//       // Redirect user or perform further actions
//   } catch (error) {
//       console.error("Error:", error);
//       // Handle error
//   }

 
 

//   }
  
  
//   console.log("this is editname",state);
//   return (
//     <div>
//         <div className="addpage">
//         <div className="addcategory">
//           <form method="post">
//             <div className="category-image">
//               <input type="file" onChange={imagefile} className="file-image" />
//               <img
//                 src={Image}
//                 className="add-category-image"
//                 alt="category-image"
//               />
//               {/* {backgroundimage ? ( */}
//                 {/* // src={`http://127.0.0.1:8000${item.image}`} */}
//                 <img src={`https://pawan2221.pythonanywhere.com/${state[0].image}`} className="clickimage" />
              
//             </div>
//             <div className="nameandtext">
              
//               <input
//                 onChange={categorytext}
//                 type="text"
//                 class="categorytext"
//                 placeholder="Enter a category name"
//                 defaultValue={state[0].name}
//               />
//             </div>

//             <div className="savecategory">
//               <input
//                 onClick={savecategorybtn}
//                 type="button"
//                 value="Save"
//                 className="savecategory-button"
//               />
//             </div>
//           </form>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default EditCategory