import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}