import React, { useState } from 'react'
import AddTask from './AddTask'
import ListTasks from './ListTasks'
import './Todo.css'

const Todo = () => {
  const[tasks,setTasks]=useState([])

  const addTask=(title)=> {
    const newTask = [...tasks, {title}];
    setTasks(newTask)
  }

  const removeTask= (index) =>{
    const newTask = [...tasks]
    newTask.splice(index,1)
    setTasks(newTask)
  }

  return (
    <>
        <div className='container'>
            <div className='header'>TODO APP</div>
            <div className='add-task'><AddTask addTask={addTask} /></div>
            <div className='tasks'>
              {tasks.map((tasks, index)=>(
                <ListTasks tasks={tasks} removeTask={removeTask} index = {index} key={index}/>
              ))}
              
            </div>
        </div>
    </>
  )
}

export default Todo