import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer.jsx';
import Faq from './components/FAQ/Faq.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Faq />
    <Footer />
  </React.StrictMode>,
)
