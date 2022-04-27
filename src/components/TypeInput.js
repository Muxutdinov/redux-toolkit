import React from "react";
import { useDispatch } from "react-redux";
import { typefirst, typesecond } from "../redux/innerText";

const TypeInput = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <input
        placeholder="firstname"
        onChange={(e) => dispatch(typefirst(e.target.value))}
      />
      <input
        placeholder="lastname"
        onChange={(e) => dispatch(typesecond(e.target.value))}
      />
    </div>
  );
};

export default TypeInput;
