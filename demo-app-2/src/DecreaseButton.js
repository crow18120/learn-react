import React from "react";
// import {useState} from "react";
import { useDispatch } from "react-redux";
import { DecreaseCount } from "./redux/ActionCreator";

export default function DecreaseButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    const action = DecreaseCount();
    dispatch(action);
  };

  return (
    <div>
      <button onClick={handleClick}>Decrease</button>
    </div>
  );
}
