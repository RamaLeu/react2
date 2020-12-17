import React from 'react'

const Todolist = ({task, index}) => {
    return (
        <tr>
            <td>{index +1}</td>
            <td>{task.text}</td>
            <td>{task.isCompleted ? 'Completed' : 'In progress'}</td>
        </tr>
    )
}

export default Todolist
