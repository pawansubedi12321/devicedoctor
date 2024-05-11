import React, { useState, useEffect } from "react";
import "./AddCategory.css";
import Image from "./assets/img.png";
import { useNavigate } from "react-router-dom";
const AddCategory = () => {
  const [clickimage, setclickimage] = useState("");
  const [backgroundimage, setbackgroundimage] = useState(false);
  const [categorytextstate, setcategorytextstate] = useState("");
  const [imagewithouturl, setimagewithouturl] = useState("");
  const navigate = useNavigate();
  const imagefile = (e) => {
    let x = e.target.files[0];

    setimagewithouturl(x);

    console.log("this is x");
    console.log(x.name);
    console.log(imagewithouturl);
    console.log("this is end");
    // setimg(x);
    if (x) {
      const y = URL.createObjectURL(x);
      console.log("dfs");
      console.log(y);
      console.log("ned");

      setclickimage([...clickimage, y]);
      setbackgroundimage(!backgroundimage);
    }
  };

  
  const categorytext = (e) => {
    const x = e.target.value;
    setcategorytextstate(x);
  };
  const savecategorybtn = async (e) => {
    e.preventDefault();
    const x = localStorage.getItem("id");
    const formData = new FormData();
    formData.append("user", x);
    formData.append("name", categorytextstate);
    formData.append("image", imagewithouturl);

    try {
      const response = await fetch(
        "https://pawan2221.pythonanywhere.com/api/v1/user/addcategory/",
        {
          method: "POST",
          body: formData,
        }
      );

      // Check if the request was successful (status code 200-299)
      if (response.ok) {
        const responseData = await response.json(); // Parse response JSON
        console.log(responseData);
        navigate("/category");

        //   // Log the response data
        //   navigate('/dashboard',{state:responseData});
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <div className="addpage">
        <div className="addcategory">
          <form method="post">
            <div className="category-image">
              <input type="file" onChange={imagefile} className="file-image" />
              <img
                src={Image}
                className="add-category-image"
                alt="category-image"
              />
              {backgroundimage ? (
                <img src={clickimage} className="clickimage" />
              ) : (
                ""
              )}
            </div>
            <div className="nameandtext">
              
              <input
                onChange={categorytext}
                type="text"
                class="categorytext"
                placeholder="Enter a category name"
              />
            </div>

            <div className="savecategory">
              <input
                onClick={savecategorybtn}
                type="button"
                value="Save"
                className="savecategory-button"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
