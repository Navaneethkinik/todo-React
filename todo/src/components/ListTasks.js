import React from 'react'

const ListTasks = ({tasks, index, removeTask}) => {
  return (
    <>
      <div className='list-tasks'>
        {tasks.title}
        <button onClick={()=>{removeTask(index)}} className='delete-btn'>Delete</button>
      </div>
    </>
  )
}

export default ListTasks