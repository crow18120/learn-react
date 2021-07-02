import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateAmount } from "./redux/ActionCreator";

export default function GetAmount(props) {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const action = UpdateAmount(parseInt(event.target.value))
    console.log(parseInt(event.target.value));
    dispatch(action)
  }

  const amount = useSelector((store) => store.countState.amount)

  return (
    <div>
      <input value={amount} onChange = {handleChange}/>
    </div>
  );
}
