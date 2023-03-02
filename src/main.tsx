import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.scss';
// Say something
console.log('Renderer execution started');

// Application to Render
const App: FC = () => {
  return (
    <>
      <h1>Welcome</h1>
    </>
  );
};

// Render application in DOM
createRoot(document.getElementById('app')).render(<App />);
