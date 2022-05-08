import React from "react";
import { useDispatch } from "react-redux";
import { toggleCompleted,onDelete } from "../redux/todo";

const TodoList = ({ value }) => {
  const dispatch = useDispatch();
  const toggleHandler = (id) => {
    dispatch(toggleCompleted(id));
  };
  const deleteHandler = (id)=>{
    dispatch(onDelete(id))
  }

  return (
    <div>
      <span style={{ color: value.completed ? "red" : "" }}>{value.text}</span>
      <button onClick={() => toggleHandler(value.id)}>toggle</button>
      <button onClick={() => deleteHandler(value.id)}>delete</button>
    </div>
  );
};

export default TodoList;
