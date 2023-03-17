import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import profileImage from "../../asset/image/profile.jpg";
import { getAllPost } from "../../redux/reducers/userPost";
import PostItem from "../PostItem/PostItem";
import './Post.css'
export default function Post() {
  const { post } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPost());
  }, [post]);
  return (
    <div className="allPost">
      {post?.map((post) => {
        return <PostItem post={post} />;
      })}
    </div>
  );
}
