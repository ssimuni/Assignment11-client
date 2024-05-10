import ReactDOM from 'react-dom/client'
import AuthProvider from './providers/AuthProvider.jsx'
import Root from './layouts/Root.jsx'
import Home from './components/Home.jsx';
import PrivateRoute from "./routes/PrivateRoute";
import Error from './components/Error.jsx';
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
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