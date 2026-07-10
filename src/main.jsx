import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import App from './App.jsx'
import Home from './main/Home.jsx'
import NotFound from './NotFound.jsx'
import ProjectPage from './main/ProjectPage.jsx'

// npm run dev

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/success', element: <Home success={true} /> },
      { path: '/error', element: <Home error={true} /> },
      { path: '/:projectID', element: <ProjectPage /> },
      { path: '/404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)