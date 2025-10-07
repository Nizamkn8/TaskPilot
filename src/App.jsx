import './App.css'
import { Routes,Route, Router } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'
import Teams from './pages/Teams';
import Tasks from './pages/Tasks';
import Gallery  from './pages/Gallery';
import Settings from './pages/Settings';

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/teams" element={<Teams/>} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
