import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Page/Home.jsx';
import Portfolio from './Page/Portfolio.jsx';
import About from './Page/About.jsx';
import Contact from './Page/Contact.jsx';
import Resume from './Page/Resume.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/projects",
        element: <Portfolio></Portfolio>
      },
      {
        path: "/resume",
        element: <Resume></Resume>
      },
      
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
