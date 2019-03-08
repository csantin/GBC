import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Greeter from './Greeter'
import * as serviceWorker from './serviceWorker';

// const express = require('express');
// const app = express();
// const request = require("request");
// const path = require("path");

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Greeter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// const PORT = process.env.PORT || 3030;

// app.use(express.static(path.join(__dirname, 'frontend/build')))

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/frontend/build/index.html'))
// })