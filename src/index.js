import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/styles/style.scss'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {persistor} from './redux/index'
import store from './redux/index'
import AppRoutes from "./AppRoutes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
                <AppRoutes/>
        </PersistGate>
    </Provider>
);


