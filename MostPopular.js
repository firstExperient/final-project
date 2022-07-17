import React, { useState, useEffect } from "react";
import PostHeader from "./PostHeader";
import "../App.css";
import {url} from '../App.js'

function MostPopular(props) {
  const [posts, setPosts] = useState([]);
  const getPosts = async()=>{
    const response = await fetch(url + "/most-popular",{method:"get" })
    setPosts(await response.json())
  }
  useEffect(()=>{getPosts()},[]);
  return (
    <div className="feed" id="most-popular-page">
      {posts.map(post => (
        <PostHeader key={post.postId} postName={post.postName} img={post.img}> </PostHeader>
      ))}
    </div>
  );
}
export default MostPopular