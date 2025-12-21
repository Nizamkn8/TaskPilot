import React from 'react'

const Step2Meta = ({back,next,updateField,task}) => {
  return (
    <div>
      <h2>Step2Meta</h2>
      <div>
        <select
          value={task.priority}
          onChange={(e) => updateField("priority", e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <input
          type="date"
          value={task.deadline}
          onChange={(e) => updateField("deadline", e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <button className='inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition' onClick={back}>Back</button>
        <button className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition" onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default Step2Meta
