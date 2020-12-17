import React, {useState} from 'react'
import NewTask from './NewTask'
import Todolist from './Todolist'

const Todo = () => {
    const [tasks, setTask]= useState([
        {
            text: "Pirma",
            isCompleted: false
        },
        {
            text: "Antra uzduotis",
            isCompleted: true
        }
    ])

const addNewTask = (text)=>{
    let newrow = [...tasks, {text}]
    setTask(newrow)
}
    return (
        <div>
        <div className="table">
            {
            tasks.map((task, index)=>(
            <Todolist 
            key={index}
            index={index}
            task={task}/>
            ))
            }
        </div>
        <NewTask addNewTask={addNewTask}/>
        </div>
    )
}

export default Todo
