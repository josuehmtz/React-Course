import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
// import { HooksApp } from './HooksApp.jsx'
// import { MultipleCustomHooks } from './03-examples'
// import { FocusScreen } from './04-useRef/FocusScreen.jsx'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { MemoHook } from './07-useMemo/MemoHook'
// import { Memorize } from './06-memo/Memorize'
// import { CallBackHook } from './08-useCallback/CallBackHook'
// import { Padre } from './07-tarea-memo/07-tarea-memo/Padre'
// import './09-useReducer/intro-reducer'
// import { TodoApp } from './09-useReducer/TodoApp'
import { MainApp } from './10-useContext/MainApp'
import ErrorPage from './10-useContext/ErrorPage';

import './index.css'
import { HomePage } from './10-useContext/HomePage';
import { LoginPage } from './10-useContext/LoginPage';
import { AboutPage } from './10-useContext/AboutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "login",
        element: <LoginPage/>,
      },
      {
        path: "about",
        element: <AboutPage/>,
      },

      //!Este funciona para el caso de querer redirigir al usuario a un componente en caso de que la ruta no exista {
      //   path: "*",
      //   element: <HomePage/>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    {/* <HooksApp /> */}
    {/* <CounterApp/> */}
    {/* <CounterWithCustomHook/> */}
    {/* <SimpleForm/> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen/> */}
    {/* <Layout/> */}
    {/* <Memorize/> */}
    {/* <MemoHook /> */}
    {/* <CallBackHook/> */}
    {/* <Padre/> */}
    {/* <TodoApp/> */}
    {/* <MainApp/> */}
  </React.StrictMode>,
)
