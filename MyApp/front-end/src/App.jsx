import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' //a la funcion browserrouter se llamara router 
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'




function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Products' element={<Products />}/>
        <Route path ='/Login' element={<Login />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

import React from "react";


export default App
