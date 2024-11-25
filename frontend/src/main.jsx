import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Valve from './components/Valve.jsx'
import Rate from './components/Rate.jsx'

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <App/>
  },
  {
    path: "/valve",
    element: <Valve/>
  },
  {
    path: "/rate",
    element: <Rate/>
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
