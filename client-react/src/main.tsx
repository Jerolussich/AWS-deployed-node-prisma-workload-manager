import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StudentTable from './components/StudentTable';
import HoursworkedTable from './components/HoursworkedTable';
import TeacherTable from './components/TeacherTable';
import Login from './components/Login';
import Register from './components/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/student",
    element: <StudentTable/>,
  },
  {
    path: "/teacher",
    element: <TeacherTable/>,
  },
  {
    path: "/hoursworked",
    element: <HoursworkedTable/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router}/>
);
