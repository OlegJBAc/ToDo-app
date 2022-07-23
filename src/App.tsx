import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import s from './app.module.scss';
import NotFount from './components/notFound/notFound';
import MainLayout from './mainLayout/mainLayout';


const App = () => {
  
  return (
    <BrowserRouter>
      <div className={s.app}>
        <Routes>
          <Route path='/' element={<MainLayout/>}/>
          <Route path='*' element={<NotFount/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
