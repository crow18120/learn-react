import { Input } from "antd";
import { useState } from "react";

function TaskInput({ onCompletionAddChanged }) {
  const [inputValue, setInputValue] = useState("");

  const handleGetInput = (event) => {
    setInputValue(event.target.value);
  };

  const handlePressEnter = () => {
    if (inputValue === "") {
      return;
    }

    onCompletionAddChanged(inputValue);

    setInputValue("");
  };

  return (
    <Input
      value={inputValue}
      onChange={handleGetInput}
      placeholder="Nhập tên task rồi ấn enter"
      onPressEnter={handlePressEnter}
    />
  );
}

export default TaskInput;
