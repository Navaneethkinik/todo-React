import React from 'react'

const AddTask = () => {
  return (
    <>
      <div className='input-container'>
        <input className='input' type='text' placeholder='Add a new Task' />
        <button>Add Task</button>
      </div>
    </>
  )
}

export default AddTask