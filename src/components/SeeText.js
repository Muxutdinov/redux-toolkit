import React from "react";
import { useSelector } from "react-redux";

const SeeText = () => {
  const firstname = useSelector((state) => state.innerText.firstname);
  const lastname = useSelector((state) => state.innerText.lastname);
  console.log(firstname);
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <span>{firstname}</span>
      <span>{lastname}</span>
    </div>
  );
};

export default SeeText;
