import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Iventory from './pages/inventory'
import Article from './pages/article'
import Sell from './pages/sell'
import Buy from './pages/buy'
import Logout from './pages/logout'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/iventory" element={<Iventory />}></Route>
          <Route path="/article" element={<Article />}></Route>
          <Route path="/sell" element={<Sell />}></Route>
          <Route path="/buy" element={<Buy />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
