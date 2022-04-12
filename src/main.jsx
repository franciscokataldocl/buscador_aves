import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Page404 from './components/Page404';
import { BirdsProvider } from './context/BirdsContext';



ReactDOM.render(
  <React.StrictMode>
    <BirdsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          {/* <Route path="*" element={<Page404 />}></Route> */}
          {/* redireccionar */}
          <Route path="*" replace element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </BirdsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
