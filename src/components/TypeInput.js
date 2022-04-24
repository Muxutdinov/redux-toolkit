import React from "react";
import { useDispatch } from "react-redux";
import { typefirst } from "../redux/innerText";

const TypeInput = () => {
  const [text, setText] = React.useState("");
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
        value={text}
        placeholder="firstname"
        onChange={(e) => dispatch(typefirst(setText(e.target.value)))}
      />
      <input placeholder="lastname" />
    </div>
  );
};

export default TypeInput;
