import React, { useEffect, useState } from "react";
import { PostCard, postDetailsInterface } from "./PostCard";
import axios from "axios";

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      });
  }, []);
  return (
    <div className="post-list" data-testid="post-list">
      {posts.map((ele: postDetailsInterface) => (
        <PostCard key={String(ele.id)} postDetails={ele} setPosts={setPosts} />
      ))}
    </div>
  );
};
