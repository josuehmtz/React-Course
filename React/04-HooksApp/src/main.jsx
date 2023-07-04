import React from 'react'
import ReactDOM from 'react-dom/client'
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
// import { HooksApp } from './HooksApp.jsx'
// import { MultipleCustomHooks } from './03-examples'
// import { FocusScreen } from './04-useRef/FocusScreen.jsx'
// import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-memo/Memorize'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp/> */}
    {/* <CounterWithCustomHook/> */}
    {/* <SimpleForm/> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen/> */}
    {/* <Layout/> */}
    <Memorize/>
  </React.StrictMode>,
)
