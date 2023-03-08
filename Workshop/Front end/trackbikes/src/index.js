import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import View from './View';
import FormData from './FormData';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{backgroundColor:"lightgray"}}>
  {/* <View /> */}
  <BrowserRouter>
  <Routes>

    <Route path='/getdetail' element={<View />} />
    <Route path='/update' element={<FormData />} />
  </Routes>
</BrowserRouter>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
