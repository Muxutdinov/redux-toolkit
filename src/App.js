import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/Counter";
import TypeInput from "./components/TypeInput";
import SeeText from "./components/SeeText";
import AddTodoForm from "./components/AddTodoForm";

const App = () => {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{counter.data}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <hr />
      <TypeInput />
      <SeeText />
      <hr />
      <AddTodoForm />
    </div>
  );
};

export default App;
