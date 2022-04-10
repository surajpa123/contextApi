import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import {RegisterContextProvider} from "./Context/RegisterContext.jsx"

ReactDOM.render(
  <React.StrictMode>
    <RegisterContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </RegisterContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
