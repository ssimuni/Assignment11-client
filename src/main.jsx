import ReactDOM from 'react-dom/client'
import AuthProvider from './providers/AuthProvider.jsx'
import Root from './layouts/Root.jsx'
import Home from './components/Home.jsx';
import PrivateRoute from "./routes/PrivateRoute";
import Error from './components/Error.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import './index.css'
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Add_Volunteer_Post from './components/Add_Volunteer_Post.jsx';
import Need_Volunteer from './components/Need_Volunteer.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/volunteer-posts')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/add-volunteer-post',
        element: <PrivateRoute><Add_Volunteer_Post></Add_Volunteer_Post></PrivateRoute>,
      },
      {
        path: '/need-volunteer',
        element: <Need_Volunteer></Need_Volunteer>,
        loader: () => fetch('http://localhost:5000/volunteer-posts')
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