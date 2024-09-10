import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './routes/Login.jsx'
import SignUp from './routes/Signup.jsx'
import Dashboard from './routes/DashBoard.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'

const router = createBrowserRouter([
  {
  path: "/",
  element: <Login />,
  },
  {
  path: "/signup",
  element: <SignUp />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
      path:"/dashboard",
      element: <Dashboard />
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
