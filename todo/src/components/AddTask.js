import React from 'react'

const AddTask = () => {
  return (
    <>
      <div className='input-container'>
        <input className='input' type='text' placeholder='Add a new Task'  onChange={(e)=>{
          console.log(e.target.value)
        }} />
       
        <button className='add-btn'>Add Task</button>
      </div>
    </>
  )
}

export default AddTask