import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
//import Page404 from './components/Page404';
import { BirdsProvider } from './context/BirdsContext';
import { FilterBirdsProvider } from './context/FilterBirds';
import ContainerSingle from './components/single/ContainerSingle';
import GlobalStyle from "./styles/globalStyles";



ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <BirdsProvider>
      <FilterBirdsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/bird/:uid" element={<ContainerSingle/>}></Route>
            {/* <Route path="*" element={<Page404 />}></Route> */}
            {/* redireccionar */}
            <Route path="*" replace element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </FilterBirdsProvider>
    </BirdsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
