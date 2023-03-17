import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import AddPost from '../../components/AddPost/AddPost';
import Post from '../../components/Post/Post';
import { getUser } from '../../redux/reducers/userLogin';
import './Home.css'
export default function Home() {
  const {user} = useSelector((state)=>state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    dispatch(getUser(userId,token))
  }, []);

  return (
    <div className='home-container'>
      <AddPost/>
      <Post/>
    </div>
  );
}
