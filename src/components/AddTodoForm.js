import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import { onAdd } from "../redux/todo";
import { v4 } from "uuid";

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos.todo);
  console.log(data);
  const [todoValue, setTodoValue] = useState("");

  const handleAddTodo = () => {
    const todo = {
      id: v4(),
      text: todoValue,
      completed: false,
    };
    dispatch(onAdd(todo));
    setTodoValue("");
  };
  return (
    <div style={{ marginLeft: "300px" }}>
      <input value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
      <button onClick={handleAddTodo}>Add todo</button>
      {data.map((value) => {
        return <TodoList key={value.id} value={value} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default AddTodoForm;
