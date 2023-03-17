import axios from "axios";
import React, { useEffect, useState } from "react";
import './AddPost.css';

export default function AddPost() {
  const [formValues, setFormValues] = useState({});
  const token = localStorage.getItem("token");
 
  const addPost = (data) => {
    console.log(data);
    axios
      .post("http://localhost:3001/posts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response.data));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { userId: localStorage.getItem("userId"), ...formValues };
    addPost(data);
  };

  return (
    <div className="form-container">
      <form className="form-content" onSubmit={handleSubmit}>
        <label>Description</label>
        <textarea className="post-textbox"
          name="description"
          onChange={(e) =>
            setFormValues({ ...formValues, description: e.target.value })
          }
        ></textarea>
        <label>Image</label>
        <input
          type="file"
          name="image"
          onChange={(e) =>
            setFormValues({ ...formValues, picturePath: e.target.value })
          }
        />
        <div className="btn-parent"><button className="btn-addpost" type="submit">Add Post</button></div>
      </form>
    </div>
  );
}
