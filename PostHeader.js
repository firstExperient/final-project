import React, { useState, useEffect } from "react";
import "./App.css";
function PostHeader(props) {
//   const [post, setPost] = useState([]);

//   useEffect(() => {
//     fetch(``)
//       .then(response => response.json())
//       .then(response => {
//         setPost(response);
//       });
//   }, []);
//   function toPost(e) {
//     props.post(post);
//   }
  return (
    <div className="postH">
      <img className="imgH" src={props.img}></img>
      <h2>{props.postName}</h2>
    </div>
  );
}
export default PostHeader;