import React from "react";
import { useDispatch } from "react-redux";
import { ResetCount } from "./redux/ActionCreator";

export default function ResetButton(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    const action = ResetCount();
    dispatch(action);
  };

  return (
    <div>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}
