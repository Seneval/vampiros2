import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa el componente principal
import './style.css'; // Importa estilos globales

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
