import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/Post";
import PostItem from "./PostItem";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.Posts.posts);
  return (
    <div>
      <button onClick={() => dispatch(getPosts())}>get Posts</button>
      {posts.map((value) => {
        return <PostItem key={value.id} value={value} />;
      })}
    </div>
  );
};

export default Posts;
