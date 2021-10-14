import React from 'react'
import ReactDOM from 'react-dom'
import './main.module.css'
import App from './routes/App'
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
