import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import './App.css';
import React from 'react';
import { AppRoutes } from './router/routes';
import { Registration } from './screens/student_forms/registration';
import { EditStudent } from './screens/student_forms/edit';
import { LoginPage, StudentList } from './screens';

const protectedRouteLoader = () => {
  if (localStorage.getItem('loginStatus') !== 'Login successful'){
    return redirect(AppRoutes.login);
  }
  return null;
}

const publicRouteLoader = () => {
  if (localStorage.getItem('loginStatus') === 'Login successful'){
    return redirect(AppRoutes.todoapp);
  }
  return null;
}

const router = createBrowserRouter(
  [
    {
      path: AppRoutes.loginn,
      loader: publicRouteLoader,
      element: <LoginPage /> 
    },
    {
      path: '/',
      loader: publicRouteLoader,
      element: <LoginPage /> 
    },
    {
      path: AppRoutes.registration,
      loader: protectedRouteLoader,
      element: <Registration /> 
    },
    {
      path: AppRoutes.edit,
      loader: protectedRouteLoader,
      element: <EditStudent /> 
    },
    {
      path: AppRoutes.students,
      loader: protectedRouteLoader,
      element: <StudentList /> 
    },
  ]
)

function App() {
  return <RouterProvider router = {router}></RouterProvider>
}

export default App;
