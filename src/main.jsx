import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import PrivateRout from './components/PrivateRout/PrivateRout';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Eevents from './components/Events/Eevents';
import ErrorPage from './components/ErrorPage/ErrorPage';
import EventDetails from './components/EventDetails/EventDetails';
import OurServices from './components/OurServices/OurServices';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/services',
        element: <PrivateRout><OurServices></OurServices></PrivateRout>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/event/:id',
        element: <PrivateRout><EventDetails></EventDetails></PrivateRout>,
        loader: () => fetch('../events.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
