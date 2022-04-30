import React from 'react';
import './App.css';
import { Router } from './routes/Router';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router />
      <Footer />
    </div>
  );
}

export default App;
