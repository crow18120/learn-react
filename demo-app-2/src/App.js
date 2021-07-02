import React from "react";
// import {useState} from "react";
import IncreaseButton from "./IncreaseButton.js";
import GetAmount from "./GetAmount.js";
import DecreaseButton from "./DecreaseButton.js";
import ResetButton from "./ResetButton.js";
import { useSelector } from 'react-redux';

export default function App() {
  const count = useSelector((store) => store.countState.count )
  return (
    <div>
      {count}
      <GetAmount/>
      <IncreaseButton/>
      <DecreaseButton/>
      <ResetButton/>
    </div>
  );
}
