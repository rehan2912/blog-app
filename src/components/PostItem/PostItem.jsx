import React, { useEffect, useState } from "react";
import profileImage from "../../asset/image/profile.jpg";

import "./PostItem.css";
export default function PostItem({ post }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  return (
    <div className="post-container">
      <div key={post._id} className="post-content">
        <span className="user-name">
          <p>
            {post.userName}
          </p>
          <img
            className="user-name-image"
            src={profileImage}
            alt="post image"
            width="30px"
            height="30px"
          ></img>
        </span>
        <div className="description">
          <p id="long-desc">
            {showFullDescription
              ? post.description
              : post.description.slice(0, 60) + "..."}
            <button
              className="btn-readmore"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? "Read less" : "Read more"}
            </button>
          </p>
        </div>

        <p>Likes: {Object.keys(post.likes).length}</p>
        <div className="post-img">
          <img
            src={profileImage}
            alt="post image"
            width="300px"
            height="300px"
          ></img>
        </div>
      </div>
    </div>
  );
}
