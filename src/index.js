import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Utils
import store from './utils';

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
