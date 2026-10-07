// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import './Cards.css'
import Menu from './menu';
import Mocha from './assets/cf-mocha';
import Test from './test';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Menu />} />
      <Route path="mocha" element={<Mocha />} />
      <Route path="test" element={<Test />}/>
    </Routes>
  </BrowserRouter>,
)
