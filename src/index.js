import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './assets/i18n/i18n'

import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import { BrowserRouter } from "react-router-dom"
import App from './App';

import Provider_defaultPoints from './components/contexts/Provider_defaultPoints';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Provider_defaultPoints>
                <App />
            </Provider_defaultPoints>
        </Provider>
    </BrowserRouter>
);

if (import.meta.webpackHot) import.meta.webpackHot.accept();
