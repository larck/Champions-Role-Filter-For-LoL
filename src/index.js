import React from 'react';
import ReactDOM from 'react-dom';

import './components/style.scss';
import App from './components/App';

const rootElement = document.getElementById('app');
ReactDOM.render(
    <App />,
    rootElement
);