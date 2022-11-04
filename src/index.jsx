import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App/App";
import "./index.css";
import {HashRouter as Router} from "react-router-dom"


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
        <React.StrictMode>
                <Router>
                <App />
                </Router>
        </React.StrictMode>
)