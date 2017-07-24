import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouteSection from './Route';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouteSection />, document.getElementById('root'));
registerServiceWorker();
