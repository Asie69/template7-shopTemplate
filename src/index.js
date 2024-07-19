import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/Home';

import PageNotFound from './pages/pageNotFound';
import Shop from './pages/Shop';
import SingleProduct from './pages/singleProduct';
import ContactUs from './pages/contact';
import Cart from './pages/cart';
import CheckOut from './pages/checkOut';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement:<PageNotFound/>,
    children: [
      {
        index: true,
        Component:Home
      },
      {
        path: "/shop",
        Component:Shop
      },
      {
        path: "/singleProduct",
        Component:SingleProduct
      },
      {
        path: "/contact",
        Component:ContactUs
      },
      {
        path: "/cart",
        Component:Cart
      },
      {
        path: "/checkOut",
        Component:CheckOut
      }
    ]
 } 
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
