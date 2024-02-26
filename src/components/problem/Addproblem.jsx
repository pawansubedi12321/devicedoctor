import React ,{useState} from 'react';
import './Addproblem.css';
import Image from './assets/img.png';
import { useScrollTrigger } from '@mui/material';
import {useLocation,useNavigate} from 'react-router-dom'
const Addproblem = () => {
    const[name,setname]=useState("");
    const[description,setdescription]=useState("");
    const[intervalvalue,setintervalvalue]=useState("");
    const[Estimatedamnt,setEstimatedamnt]=useState("");
    const[image,setimage]=useState("");
    const[addproblemimage,setaddproblemimage]=useState('');
    const[show,setshow]=useState(false);
    const { state } = useLocation();

    console.log("this is state");
    console.log(state);
    console.log("end");

    const problemname=(e)=>{
        const x=e.target.value;
        setname(x);
        // console.log(x);
                                                                     
    }
    const problemdescription=(e)=>{
        const x=e.target.value;
        setdescription(x);
        console.log(x);
    }
    const Timeintervalvalue=(e)=>{
        const x=e.target.value;
        setintervalvalue(x);
        console.log(x);

    }
    const estmamount=(e)=>{
      const x=e.target.value;
      setEstimatedamnt(x);
    }
    const imagefile=(e)=>{
      const x=e.target.files[0];
      console.log(x);
      setshow(true);
      setimage(x);
      if (x) {
        const y = URL.createObjectURL(x);
        console.log("dfs");
        console.log(y);
        console.log("ned");
        setaddproblemimage([...addproblemimage, y]);
        // setbackgroundimage(!backgroundimage);
      }

    }
    const savebtn=async()=>{
        // e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", Estimatedamnt);
        formData.append("est_time", intervalvalue);
        formData.append("short_description",description);
        formData.append("image",image);
        formData.append('category',state);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/user/addproblem/", {
        method: "POST",
        body:formData,
      });
      // Check if the request was successful (status code 200-299)
      if (response.ok) {
        const responseData = await response.json(); // Parse response JSON
        console.log(responseData);
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    }
  return (
    <div>
        
      <div className="addpage">
      <div className="addcategory">
        
      <div className="add-question-body">
                <p className="info">Provide more informations</p>
                <div className="row">
                  <div className="col-md-7 text-33">
                    <div class="mb-3">
                      <input
                        class="name col-md-12"
                        style={{ color: "white" }}
                        id="exampleFormControlTextarea1"
                        onChange={problemname}
                        placeholder="Typehere..."
                        rows="3"
                      />
                      <label className={`name-333`}>Name</label>
                    </div>

                    <div className="desc-443">
                      <label className={`desc-32 `}>Short Description</label>

                      <div class="mb-3">
                        <textarea
                          style={{ color: "white" }}
                          onChange={problemdescription}
                          placeholder="Typehere..."
                          class="col-md-12 shortdescription"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                        <div className="count">0/200</div>
                      </div>
                    </div>

                   
                      <div className=" estm-timeinterval">
                        <span className="interval">Estm. Time Interval</span>
                        <div className=" text-432">
                          <input
                            type="text"
                            placeholder="0"
                            onChange={Timeintervalvalue}
                           
                            className="text-32"
                          />
                          <span className="hrs">hrs</span>
                        </div>
                      </div>

                      <div className=" estm-timeinterval">
                        <span className="interval">Estm.Amount</span>
                        <div className=" text-43">
                          <input
                            type="text"
                            placeholder="00.000"
                            onChange={estmamount}
                           
                            className="interval-text"
                          />
                          <span className="hrs">Rs</span>
                        </div>
                      </div>
                  </div>

                  <div className="col-md-5 image-savebtn">
                    <div className="add-image-xxd">
                      <img src={Image}className='addimage'/>
                      <input type="file"required className={`problemfile `}onChange={imagefile} accept="image/*"/>
                      { show ?<img className="addproblemimage"src={addproblemimage}alt="addproblemimage"/>:""
                      }
                      
                    </div>
                    <div className="save-33">
                        <button className='save-addprob-btn'onClick={savebtn}>Save</button>
                      {/* <img src=""className="savebtn"alt="savebtn"/> */}
                    </div>
                  </div>
                </div>
              </div>
        
        </div>

      </div>
      </div>
  )
}

export default Addproblem