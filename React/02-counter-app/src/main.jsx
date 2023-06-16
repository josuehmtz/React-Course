import React from 'react';
import ReactDOM from 'react-dom/client';

import {HelloWorldApp} from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        {/* <FirstApp title='Example 1'/> */}
        <CounterApp value={ 27 }/>
    </React.StrictMode>
);