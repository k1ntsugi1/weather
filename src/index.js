import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './i18n/i18n'
import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

if (import.meta.webpackHot) import.meta.webpackHot.accept();
