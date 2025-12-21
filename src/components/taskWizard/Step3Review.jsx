import React from 'react'

const Step3Review = ({back,task,onSubmit}) => {
  return (
    <div>
      <h2>Step 3 Review</h2>
      <div>
        <div>Title : {task.title}</div>
        <div>Description : {task.description}</div>
        <div>Priority : {task.priority}</div>
        <div>Deadline : {task.deadline || "N/A"}</div>
      </div>
      <div className='flex gap-2'>
        <button className='inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition' onClick={back}>Back</button>
        <button className='inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition' onClick={onSubmit}>Create Task</button>
      </div>
    </div>
  )
}

export default Step3Review
