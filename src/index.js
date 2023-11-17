import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './About';
import App from './App';
import ProductDetails from './ProductDetails';
import Product from './Product';

import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';

let route=createBrowserRouter([
  {
    path:'/',
	element:<App/>
},
{
  path:'/about',
	element:<About/>
},
{
  path:'/product',
	element:<Product/>
},
{
  path:'/product/:id',
  element:<ProductDetails/>
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
