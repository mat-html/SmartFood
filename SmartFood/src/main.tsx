import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./css/style.css"
import "bootstrap/js/index.esm.js";
import "bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
