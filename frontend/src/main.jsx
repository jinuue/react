import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Valve from './pages/Admin/Valve.jsx'
import Rate from './pages/Admin/Rate.jsx'
import TSidebar from './components/Tenant/TSidebar.jsx'
import Dashboard from './pages/Admin/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path: "/admin-dashboard",
    element: <Dashboard/>
  },
  {
    path: "/valve-settings",
    element: <Valve/>
  },
  {
    path: "/rate-settings",
    element: <Rate/>
  },
  {
    path: "/homepage",
    element: <TSidebar/>
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
