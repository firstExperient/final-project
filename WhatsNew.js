import React, { useState, useEffect } from "react";
import PostHeader from "./PostHeader";
import "../App.css";
import {url} from "../App";

function WhatsNew(props) {
  const [posts, setPosts] = useState([]);
  const getPosts = async()=>{
    const response = await fetch(url + "/whats-new",{method:"get" })
    setPosts(await response.json())
  }
  useEffect(()=>{getPosts()},[]);
  return (
    <div className="feed" id="whats-new-page">
      {posts.map(post => (
        <PostHeader key={post.postId} postName={post.postName} img={post.img}> </PostHeader>
      ))}
    </div>
  );
}
export default WhatsNew;