import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from 'routes/Routing';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<Routing />);

reportWebVitals();
