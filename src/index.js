import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import './App.css';
import RouteSection from './Route';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouteSection />, document.getElementById('root'));
registerServiceWorker();
