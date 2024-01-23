import React, { useState } from 'react'
import AddTask from './AddTask'
import ListTasks from './ListTasks'
import './Todo.css'

const Todo = () => {
  const[tasks,setTasks]=useState([
    {title:"Learn"},
    {title:"Eat"},
    {title:"Sleep"},
  ])
  return (
    <>
        <div className='container'>
            <div className='header'>TODO APP</div>
            <div className='add-task'><AddTask /></div>
            <div className='tasks'>
              {tasks.map((tasks)=>(
                <ListTasks tasks={tasks}/>
              ))}
              
            </div>
        </div>
    </>
  )
}

export default Todo