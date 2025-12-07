import React from 'react'
import CounterCard from './components/CounterCard'
import { useSelector } from 'react-redux'

const Dashboard = () => {

  const tasks = useSelector(state => state.tasks.tasks)
  const totlaTasks = tasks.length;
  const tasksCompleted = tasks.filter(task => task.isCompleted).length
  const tasksPending = tasks.filter(task =>  !task.isCompleted).length
  const completionRate = Math.floor((tasksCompleted / totlaTasks) * 100)

  console.log(totlaTasks,tasksCompleted,tasksPending,completionRate)

  return (
    <div>
      <div className="mb-5 flex gap-3">
        <div className="p-3 bg-gray-300 rounded-lg">
          <div className="mb-3">Total Tasks</div>
          <span>{totlaTasks}</span>
        </div>

        <div className="p-3 bg-gray-300 rounded-lg">
          <div className="mb-3">Tasks Completed</div>
          <span>{tasksCompleted}</span>
        </div>

        <div className="p-3 bg-gray-300 rounded-lg">
          <div className="mb-3">Tasks Pending</div>
          <span>{tasksPending}</span>
        </div>

        <div className="p-3 bg-gray-300 rounded-lg">
          <div className="mb-3">Tasks Completion Rate</div>
          <span>{completionRate}%</span>
        </div>
      </div>

      <CounterCard />
    </div>
  );
}

export default Dashboard
