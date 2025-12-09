import './App.css'
import { Routes, Route } from "react-router-dom"
import DashboardPage from './pages/DashboardPage'
import Layout from './components/common/Layout'
import Teams from './pages/Teams';
import Tasks from './pages/Tasks';
import Gallery from './pages/Gallery';
import Settings from './pages/Settings';
import Users from './pages/Users';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/protected-route/ProtectedRoute';

function App() {
  return (
    <>
      <Routes>

        {/* 🔵 Public Routes (No Layout) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        {/* 🟢 Protected Routes (With Layout) */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<DashboardPage />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
