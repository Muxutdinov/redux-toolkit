import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/Counter";
import TypeInput from "./components/TypeInput";
import SeeText from "./components/SeeText";
import Todos from "./components/Todos";

const App = () => {
  const counter = useSelector((store) => store.counter);
  // console.log(counter.data);
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
      <Todos />
    </div>
  );
};

export default App;
