// import React, { useEffect, useState } from 'react';
// import Navbar from './navbar/Navbar';
// import './css/Category.css';
// import { useNavigate } from 'react-router-dom';

// const Category = () => {
//     const [category, setCategory] = useState(null);
//     const navigate = useNavigate();

//     const addCategory = () => {
//         navigate('/addcategory');
//     };

//     useEffect(() => {
//         const saveCategoryBtn = async () => {
//             const x = localStorage.getItem("id");
//             const response = await fetch(`http://127.0.0.1:8000/api/v1/user/getcategory/${x}/`, {
//                 method: 'GET',
//             });

//             if (response.ok) {
//                 const responseData = await response.json();
//                 setCategory(responseData);
//             } else {
//                 console.error("Request failed with status:", response.status);
//             }
//         };

//         saveCategoryBtn();
//     }, []);
//     console.log(category)
//     return (
//         <div>
//             <Navbar />
//             <div className='page'>
//                 <div className='savebtn'>
//                     <input className='save' onClick={addCategory} type="button" value="Add Category" />
//                 </div>
//                 { category.map((item, index) => (
//                     <div key={index}>{item.name}</div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Category;





import React, { useEffect, useState } from 'react'
import Navbar from './navbar/Navbar'
import './css/Category.css'
import {useNavigate} from 'react-router-dom'
import EmptyImg from './assets/EmptyImg.svg'
const Category = () => {
    const[category,setcategory]=useState(null);
    const navigate=useNavigate();
    const addcategory=(e)=>{
        navigate('/addcategory');
       

    }
    useEffect(()=>{
        

        const savecategorybtn = async (e) => {
        
            const x = localStorage.getItem("id");
            const response=await fetch(`http://127.0.0.1:8000/api/v1/user/getcategory/${x}/`,{
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
        savecategorybtn();
    },[])
    // console.log("this is cateogory");
     console.log(category);

     const imageClicked=(ind)=>{
        // console.log(e);
        navigate('/problemlist',{state:ind});

     }

  return (
    <div>
        <Navbar/>
        <div className='page'>
        <div className='row imagesection'>
        {
          category &&  category.map((item,index)=>(
            <>
                <div className='categoryimage'>
                <img src={EmptyImg} className='category-emptyimg'onClick={()=>imageClicked(item.id)}alt=''/>
                <div className='category-image-name'>{item.name}</div>
                </div>
                {/* <div className='category-image-name' key={index}>{item.name}</div> */}
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