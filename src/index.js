import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './i18n/i18n'

import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './slices/index.js';
import { BrowserRouter } from "react-router-dom"
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

if (import.meta.webpackHot) import.meta.webpackHot.accept();
