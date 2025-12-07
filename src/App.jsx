import './App.css'
import { Routes,Route, Router } from "react-router-dom"
import DashboardPage from './pages/DashboardPage'
import Layout from './components/common/Layout'
import Teams from './pages/Teams';
import Tasks from './pages/Tasks';
import Gallery  from './pages/Gallery';
import Settings from './pages/Settings';
import Users from './pages/Users';

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/teams" element={<Teams/>} />
          <Route path="/users" element={<Users />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
