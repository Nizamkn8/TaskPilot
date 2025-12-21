import React from 'react'

const Step1Info = ({next,updateField,task}) => {
  return (
    <div>
      <h2>Step1Info</h2>
      <div className='flex flex-col'>
        <input
          className='mb-3'
          type="text"
          placeholder='Title'
          value={task.title}
          onChange={(e)=> {
            updateField("title",e.target.value)
          }}
        />
        <textarea
          className='mb-3'
          type="text"
          placeholder='Description'
          value={task.description}
          onChange={(e)=> {
            updateField("description",e.target.value)
          }}
        />
      </div>
      <div className='flex gap-2'>
        <button className='inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition' onClick={next}>Next</button>
      </div>
    </div>
  )
}

export default Step1Info
