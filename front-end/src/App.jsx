import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' //a la funcion browserrouter se llamara router 
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import List from './pages/productos/List'
import AddProducts from './pages/productos/AddProducts'
import Nosotros from './pages/Nosotros'
import Administrador from './pages/Administrador'

function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Products' element={<Products />}/>
        <Route path ='/Login' element={<Login />}/>
        <Route path = '/List' element ={<List />}/>
        <Route path = '/AddProducts' element ={<AddProducts />}/>
        <Route path = '/Nosotros' element ={<Nosotros />} />
        <Route path = '/Administrador' element ={<Administrador />} />
        
      </Routes>
      <Footer />
    </Router>
  )
}

import React from "react";


export default App