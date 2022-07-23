import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import s from './app.module.scss';
import NotFount from './components/notFound/notFound';
import MainLayout from './mainLayout/mainLayout';
import { initializeProjectStorage } from './redux/app-slice';
import { appInitialized } from './redux/appCondition-slice';


const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initializeProjectStorage({...localStorage}))
    dispatch(appInitialized(true))
  }, [])

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
