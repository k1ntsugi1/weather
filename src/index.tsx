import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import './assets/i18n/i18n'

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/index';
import { BrowserRouter } from "react-router-dom"
import App from './App';

import ProviderDefaultPoints from './components/contexts/ProviderDefaultPoints';



const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ProviderDefaultPoints>
                <App />
            </ProviderDefaultPoints>
        </Provider>
    </BrowserRouter>
);

if (import.meta.webpackHot) import.meta.webpackHot.accept();
