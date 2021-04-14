import { Checkbox } from "antd";
import React from "react";
import classes from "./TodoList.module.css";

function TaskItem({ item, onCompletionStateChanged }) {
  const handleChange = (event) => {
    onCompletionStateChanged(item.id, event.target.checked);
  };

  return (
    <div className={classes.todoContainer}>
      <Checkbox
        onChange={handleChange}
        checked={item.completed}
        className={
          item.completed === true ? classes.lineThrough : classes.noneLineTrough
        }
      >
        {item.taskName}
      </Checkbox>
      <div style={{ color: "orange" }}>
        Created date: {item.createDate.toDateString()}
      </div>
      {item.completed === true ? (
        <div style={{ color: "green" }}>
          Completed date: {item.completeDate.toDateString()}
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
}

export default TaskItem;
