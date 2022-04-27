import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onAdd } from "../redux/todo";
import { v4 } from "uuid";

const Todos = () => {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.counter.data);
  const data2 = useSelector((state) => state.todos);
  console.log(data);
  console.log(data2);

  const AddTodo = () => {
    const newTodo = {
      id: v4(),
      text: todoValue,
      completed: false,
    };
    dispatch(onAdd(newTodo));
    setTodoValue("");
  };

  return (
    <div>
      <input
        placeholder="type somthing"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <div>
        <button onClick={() => AddTodo()}>Add</button>
      </div>
    </div>
  );
};

export default Todos;
