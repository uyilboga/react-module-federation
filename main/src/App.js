import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';

// eslint-disable-next-line import/no-unresolved
const RemoteApp = React.lazy(() => import('remote/App'));

function App() {
  return (
    <div className="app">
      <RemoteApp />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
