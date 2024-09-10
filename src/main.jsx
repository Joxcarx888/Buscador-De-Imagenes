import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ImagenesApp } from './components/ImagenesApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./styles/index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImagenesApp />
  </StrictMode>,
);

