import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './pages/header';
import { Home } from './pages/Home';
import'./styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header/>
    <Home />
  </React.StrictMode>
)
