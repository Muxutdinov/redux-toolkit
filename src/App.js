import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/Counter";
import TypeInput from "./components/TypeInput";
import SeeText from "./components/SeeText";
import AddTodoForm from "./components/AddTodoForm";
import Posts from "./components/Posts";

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
      <hr/>
      <Posts/>
    </div>
  );
};

export default App;
