import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import './App.css';
import React from 'react';
import { AppRoutes } from './router/routes';
import { Registration } from './screens/student_forms/registration';
import { EditStudent } from './screens/student_forms/edit';
import { LoginPage, StudentList } from './screens';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { studentFormApi } from './redux/services/studentform';

const store = configureStore({
  reducer: {
    [studentFormApi.reducerPath]: studentFormApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(studentFormApi.middleware),
})

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
      path: AppRoutes.login,
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
  return <Provider store={store}> 
      <RouterProvider router = {router}></RouterProvider>
    </Provider>
}

export default App;
