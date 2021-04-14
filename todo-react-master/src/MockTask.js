import { v4 as uuidv4 } from "uuid";

const MoskTask = [
    {
        id: uuidv4(),
        completed: false,
        taskName: "Do Something",
        createDate: new Date("4/11/2021")
    },
    {
        id: uuidv4(),
        completed: true,
        taskName: "Do Anything",
        createDate: new Date("4/11/2021")
    },
    {
        id: uuidv4(),
        completed: false,
        taskName: "Do Nothing",
        createDate: new Date("4/11/2021")
    }
]

export default MoskTask