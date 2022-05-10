import React from "react";
import { useDispatch } from "react-redux";
import { deletePostById } from "../redux/Post";

const PostItem = ({ value }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <span>{value.title}</span>
      <button onClick={() => dispatch(deletePostById(value.id))}>
        Delete post
      </button>
    </div>
  );
};

export default PostItem;
