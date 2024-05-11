import React,{useState} from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import Image from './assets/img.png';
const Editproblem = () => {

    const[name,setname]=useState("");
    const[description,setdescription]=useState("");
    const[intervalvalue,setintervalvalue]=useState("");
    const[Estimatedamnt,setEstimatedamnt]=useState("");
    const[image,setimage]=useState("");
    const[addproblemimage,setaddproblemimage]=useState('');
    const[show,setshow]=useState(true);
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
    //   setshow(true);
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
        // const formData = new FormData();
        // formData.append("name", name);
        // formData.append("price", Estimatedamnt);
        // formData.append("est_time", intervalvalue);
        // formData.append("short_description",description);
        const formData={
            name:name,
            
            est_time:intervalvalue,
            short_description:description,
        }
        try {
            
            const response = await fetch(`http://pawan2221.pythonanywhere.com/api/v1/user/getproblem/${state[0].id}/`, {
                method: "PUT",
                body: JSON.stringify(formData), // Assuming datavalue contains login data
                headers: {
                    "Content-Type": "application/json",
                },
            });
            
            if (!response.ok) {
                throw new Error("Login failed"); // Handle error response
            }
            
            // Assuming the response contains some data after successful login
            const responseData = await response.json();
            
            // Handle the response data as needed
            console.log(responseData);
            
            // Redirect user or perform further actions
        } catch (error) {
            console.error("Error:", error);
            // Handle error
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
                        defaultValue={state[0].name}
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
                          defaultValue={state[0].short_description}
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
                            defaultValue={state[0].est_time}
                          />
                          <span className="hrs">hrs</span>
                        </div>
                      </div>

                      {/* <div className=" estm-timeinterval">
                        <span className="interval">Estm.Amount</span>
                        <div className=" text-43">
                          <input
                            type="text"
                            placeholder="00.000"
                            onChange={estmamount}
                            defaultValue={state[0].price}
                           
                            className="interval-text"
                          />
                          <span className="hrs">Rs</span>
                        </div>
                      </div> */}
                  </div>

                  <div className="col-md-5 image-savebtn">
                    <div className="add-image-xxd">
                      <img src={Image}className='addimage'/>
                      <input type="file"required className={`problemfile `}onChange={imagefile} accept="image/*"/>
                      {/* src={`http://127.0.0.1:8000${state[0].image}`} */}
                      <img className="addproblemimage"src={`https://pawan2221.pythonanywhere.com/${state[0].image}`}alt="addproblemimage"/>:""
                      
                      
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

export default Editproblem