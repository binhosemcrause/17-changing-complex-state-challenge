import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Challenge (App.jsx):
// 1. Add an email input to your form.
// 2. Update your contact object to include the new email field.
// 3. Place the email label above the input for the name field.