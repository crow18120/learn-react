import React from "react";
import { useDispatch } from "react-redux";
import { IncreaseCount } from "./redux/ActionCreator";

export default function IncreaseButton() {
  const dispatch = useDispatch()

  const handleClick = () => {
    const action = IncreaseCount();
    dispatch(action);
  }

  return (
    <div>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}
