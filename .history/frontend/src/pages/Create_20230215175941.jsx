import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";


const Create = () => {
    const state = useLocation().state;
    const [value, setValue] = useState(state?.title || "");
    const [title, setTitle] = useState(state?.description || "");
    const [file, setFile] = useState(null);
    const [where_to_stay, setWhereToStay] = useState(state?.where_to_stay || "")
const [image_url1, setImageUrl1] = useState()
    const navigate = useNavigate();

    const upload = async () => {
        try {
          const formData = new FormData();
          formData.append("file", file);
          const res = await axios.post("http://localhost:8090/api/v1/upload", formData);
          return res.data;
        } catch (err) {
          console.log(err);
        }
    };
    const handleClick = async (e) => {
        e.preventDefault();
        const imgUrl = await upload();
        try {
            state
              ? await axios.put(`http://localhost:8090/api/v1/places${state.id}`, {
                  title, where_to_stay, image_url1
                  description: value,
                // where_to_stay: value,
                  image_url1: file ? imgUrl : "",
                })
                : await axios.post(`http://localhost:8090/api/v1/places`, {
                    title, where_to_stay,
                description: value,
                // where_to_stay: value,
                  image_url1: file ? imgUrl : "",
                  date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                });
                navigate("/")
          } catch (err) {
            console.log(err);
          }
        };



  return (
    <div className="create-place">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
              />
               <input
          type="text"
          placeholder="Where to stay"
          onChange={(e) => setWhereToStay(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
        </div>
    <div className='menu'>
    <div className="item"> <h1 className="item-title">Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <Button type="button" size="sm" className="btn">Save Draft</Button>
            <Button  size="sm" className="btn"
              onClick={handleClick}
            >Publish</Button>
          </div>
        </div>
        {/* <div className="item">
          <h1 className="item-title">Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked
              // ={cat === "art"}
              name="cat"
              value="art"
              id="art"
              // onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked
              // ={cat === "science"}
              name="cat"
              value="science"
              id="science"
              // onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked
              // ={cat === "technology"}
              name="cat"
              value="technology"
              id="technology"
              // onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="technology">Music</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked
              // ={cat === "cinema"}
              name="cat"
              value="cinema"
              id="cinema"
              // onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked
              // ={cat === "design"}
              name="cat"
              value="design"
              id="design"
              // onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked
              // ={cat === "food"}
              name="cat"
              value="food"
              id="food"
              // onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="food">Food</label>
          </div> */}
        {/* </div> */}
      </div>
      </div>
  );
};

export default Create;