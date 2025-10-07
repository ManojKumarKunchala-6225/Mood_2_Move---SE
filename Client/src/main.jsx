import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// The final closing parenthesis and semicolon were missing here.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
); // <--- CLOSING PARENTHESIS and SEMICOLON