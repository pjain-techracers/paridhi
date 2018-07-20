import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Routes from './routes/routes'

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
