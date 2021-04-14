import { v4 as uuidv4 } from "uuid";

const MoskTask = [
  {
    id: uuidv4(),
    completed: false,
    taskName: "Do Something",
    createDate: new Date("4/11/2021 7:00:00"),
    completeDate: "",
  },
  {
    id: uuidv4(),
    completed: true,
    taskName: "Do Anything",
    createDate: new Date("4/11/2021 8:00:00"),
    completeDate: new Date("4/12/2021 9:00:00"),
  },
  {
    id: uuidv4(),
    completed: false,
    taskName: "Do Nothing",
    createDate: new Date("4/11/2021 9:00:00"),
    completeDate: "",
  },
];

export default MoskTask;
