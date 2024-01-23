import React from 'react'

const ListTasks = ({tasks}) => {
  return (
    <>
      <div className='list-tasks'>
        {tasks.title}
        <button className='delete-btn'>Delete</button>
      </div>
    </>
  )
}

export default ListTasks