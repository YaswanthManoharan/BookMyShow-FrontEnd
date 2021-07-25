import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';

//context provider

import MovieProvider from "./context/movie.context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

    <MovieProvider>
    <App />
    </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

//while deploying no error comes (Continous integration)

/*
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>

https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png


let razorPay = new window.Razorpay(options);

*/