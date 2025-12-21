import React, { useState } from 'react'

const AddTaskForm = ({ onAdd }) => {
  const [title,setTitle] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.trim()) {
      onAdd(title.trim())
      setTitle(""); // Clear the input after submission
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Enter new task...'
          value={title}
          onChange={(e) => setTitle(e.target.value) }
        />

        <button
          className='inline-flex items-center rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition'
          type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddTaskForm
