import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home  from './Pages/Home';
import AddProduct from './Pages/AddProduct';

function App() {


  return (
    <>
    <Navbar />
    <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/AddNew' element={<AddProduct/>}/>
    </Routes>
    
    </>
  );
}

export default App;
