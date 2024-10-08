import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from'react-router-dom'
import { Provider } from'react-redux'
import store from './Store.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    </Provider>
)
