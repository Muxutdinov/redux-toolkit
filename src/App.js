import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/Counter";

const App = () => {
  const counter = useSelector((store) => store.counter);
  console.log(counter.data);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{counter.data}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default App;
