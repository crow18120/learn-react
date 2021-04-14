import Title from "antd/lib/typography/Title";
import classes from "./TodoList.module.css";
import TaskItem from "./TaskItem";

function TodoList({ taskList, onCompletionStateChanged }) {

  const handleCompletionStateChanged = (taskID, val) => {
    onCompletionStateChanged(taskID, val);
  }

  return (
    <div className={classes.todoListContainer}>
      
      {taskList.map((task) => (
        <TaskItem
          onCompletionStateChanged={handleCompletionStateChanged}
          item={task}
        />
      ))}
    </div>
  );
}

export default TodoList;
