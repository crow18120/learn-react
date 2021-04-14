import classes from "./App.module.css";
import "antd/dist/antd.css";
import TaskInput from "./TaskInput";
import Title from "antd/lib/typography/Title";
import TodoList from "./TodoList";
import { useState } from "react";
import MockTask from "./MockTask";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

function App() {
  const [taskList, setTaskList] = useState(MockTask);

  function handleCompletionStateChanged(taskID, value) {
    const newTaskList = taskList.map((ele) =>
      ele.id === taskID
        ? value === true
          ? { ...ele, completeDate: new Date(), completed: value }
          : { ...ele, completeDate: "", completed: value }
        : { ...ele }
    );
    setTaskList(newTaskList);
  }

  const handleAddNewTask = (value) => {
    console.log(value);
    setTaskList([
      ...taskList,
      {
        id: uuidv4(),
        taskName: value,
        completed: false,
        createDate: new Date(),
        completeDate: "",
      },
    ]);
    console.log(taskList);
  };

  const arrays = _.partition(taskList, (n) => n.completed);

  const completeTask = _.orderBy(arrays[0], "completeDate", "desc");
  const incompleteTask = _.orderBy(arrays[1], "createDate", "desc");

  return (
    <div className={classes.app}>
      <Title className={classes.header}>Todo app</Title>
      <div className={classes.taskInputContainer}>
        <TaskInput onCompletionAddChanged={handleAddNewTask} />
      </div>
      <section className={classes.taskListContainer}>
        <Title level={3}>Danh sách task</Title>
        <Title level={4}>Chưa hoàn thành</Title>
        <TodoList
          onCompletionStateChanged={handleCompletionStateChanged}
          taskList={incompleteTask}
        />
        <Title level={4} style={{ marginTop: 10 }}>
          Đã hoàn thành
        </Title>
        <TodoList
          onCompletionStateChanged={handleCompletionStateChanged}
          taskList={completeTask}
        />
      </section>
    </div>
  );
}

export default App;
