import React, { useState } from 'react'

const AddTaskForm = ({ onAdd }) => {
  const [title,setTitle] = useState("");
  console.log(title);


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

        <button type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddTaskForm
