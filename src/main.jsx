import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from './Home.jsx'
import { Portfolio } from './Portfolio.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/> }></Route>
        <Route path="/portfolio" element={<Portfolio/> }></Route>

      </Routes>
    </Router>
    {/* <App /> */}
  </React.StrictMode>,
)
