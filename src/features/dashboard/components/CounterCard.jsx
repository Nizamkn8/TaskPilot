import React, { useEffect, useState } from 'react'

const CounterCard = () => {

  var [count, setCounter] = useState(() => {
    const savedCounter = localStorage.getItem("counter");
    if(savedCounter) {
      return Number(savedCounter);
    }
    else {
      return 0
    }
  });



  const incrementCounter = () => {
    setCounter(prev => prev + 1)
  }

  const decrementCounter = () => {
    if(count > 0) {
      setCounter(prev => prev - 1)
    }
  }

  const resetCounter = () => {
    setCounter(0)
  }

  useEffect(() => {
    localStorage.setItem("counter",count)
  },[count])

  return (
    <div className='p-5 bg-gray-300 text-black rounded-lg'>
      <div className='mb-3'>CounterCard</div>
      <div>{count}</div>
      <button className='bg-gray-200 px-4 text-black mr-2' onClick={incrementCounter}>+</button>
      <button className='bg-gray-200 px-4 text-black mr-2' onClick={decrementCounter}>-</button>
      <button className='bg-gray-200 px-4 text-black mr-2' onClick={resetCounter}>Reset</button>
    </div>
  )
}

export default CounterCard
