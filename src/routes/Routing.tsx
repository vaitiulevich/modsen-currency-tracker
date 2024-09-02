import App from '@pages/App/App';
import Home from '@pages/Home/Home';
import React, { ReactElement } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

export default function Routing(): ReactElement {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
