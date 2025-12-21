import React, { useEffect, useState } from "react";

const CounterCard = () => {
  const [count, setCounter] = useState(() => {
    const savedCounter = localStorage.getItem("counter");
    return savedCounter ? Number(savedCounter) : 0;
  });

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementCounter = () => {
    if (count > 0) {
      setCounter((prev) => prev - 1);
    }
  };

  const resetCounter = () => {
    setCounter(0);
  };

  useEffect(() => {
    localStorage.setItem("counter", count);
  }, [count]);

  return (
    <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col justify-between">

      {/* Header */}
      <div>
        <p className="text-sm font-medium text-gray-500">
          Counter
        </p>
        <p className="mt-2 text-4xl font-bold text-gray-800">
          {count}
        </p>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={decrementCounter}
          disabled={count === 0}
          className="flex-1 rounded-lg border border-gray-300 py-2 text-sm font-medium text-gray-700
                     hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          −
        </button>

        <button
          onClick={incrementCounter}
          className="flex-1 rounded-lg bg-blue-600 py-2 text-sm font-medium text-white
                     hover:bg-blue-700 transition"
        >
          +
        </button>
      </div>

      {/* Reset */}
      <button
        onClick={resetCounter}
        className="mt-4 text-sm font-medium text-gray-500 hover:text-gray-700 transition self-start"
      >
        Reset
      </button>
    </div>
  );
};

export default CounterCard;
