import ReactDOM from 'react-dom/client'
import AuthProvider from './providers/AuthProvider.jsx'
import Root from './layouts/Root.jsx'
import Home from './components/Home.jsx';
import PrivateRoute from "./routes/PrivateRoute";
import Error from './components/Error.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Details from './components/Details.jsx';
import './index.css'
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Add_Volunteer_Post from './components/Add_Volunteer_Post.jsx';
import Need_Volunteer from './components/Need_Volunteer.jsx';
import Be_Volunteer from './components/Be_Volunteer.jsx';
import Manage_my_post from './components/Manage_my_post.jsx';
import Update from './components/Update.jsx';


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
        path: '/be-volunteer/:_id',
        element: <PrivateRoute><Be_Volunteer></Be_Volunteer></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/volunteer-posts')
      },
      {
        path: '/need-volunteer',
        element: <Need_Volunteer></Need_Volunteer>,
        loader: () => fetch('http://localhost:5000/volunteer-posts')
      },
      {
        path: '/manage_my_post',
        element: <PrivateRoute><Manage_my_post></Manage_my_post></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/volunteer-posts')
      },
      {
        path: '/details/:_id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/volunteer-posts')
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/volunteer-posts/${params.id}`)
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