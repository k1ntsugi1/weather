import './index.css';

import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

if (import.meta.webpackHot) import.meta.webpackHot.accept();
