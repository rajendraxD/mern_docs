import React, { createContext } from "react";

export const TaskContext = createContext({
    allTask: [],
    setAllTask: () => { },
    editTask: null,
    setEditTask: () => { },
    noEditHandler: () => { },
    onDeleteHandler: () => { },
    filteredTasks: [],
    setFilteredTasks: () => { },
    search: '',
    setSearch: () => { },
}
);

export default function TaskContextProvider({ children }) {
    const [allTask, setAllTask] = React.useState([
        {
            id: 1,
            name: 'Task1',
            description: 'Description 1',
            isCompleted: false
        }, {
            id: 2,
            name: 'Task 2',
            description: 'Description 2',
            isCompleted: false
        }
    ]);
    const [editTask, setEditTask] = React.useState(null)
    const [filteredTasks, setFilteredTasks] = React.useState(allTask);
    const [search, setSearch] = React.useState('')
    const noEditHandler = (data) => {
        console.log('Edited:', data)
        setEditTask(data)

    }
    const onDeleteHandler = (data) => {
        console.log('Deleted:', data)
        const newTaskList = allTask.filter((task) => task.id !== data.id)
        setAllTask(newTaskList)
        if (!editTask) {
            setEditTask(null)
        }
    }
    return <TaskContext.Provider value={
        {
            allTask, setAllTask, editTask, setEditTask, noEditHandler, onDeleteHandler, filteredTasks,
            setFilteredTasks, search, setSearch
        }
    }>
        {children}
    </TaskContext.Provider>
}
