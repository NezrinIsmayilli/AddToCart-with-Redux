import React from 'react';
import ReactDOM from 'react-dom/client';
import App from  './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { reducer } from './components/reducers';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import './sass/style.css'

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);