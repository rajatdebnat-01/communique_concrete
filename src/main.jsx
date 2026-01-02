import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Helmet } from 'react-helmet'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Helmet>
      <title>Communique Concrete - Quality Readymix Concrete Solutions</title>
      <meta name="description" content="Leading manufacturer of high-quality readymix concrete solutions. Serving West Bengal and Jharkhand with precision, integrity, and excellence." />
      <meta name="keywords" content="readymix concrete, concrete solutions, construction materials, concrete manufacturing, West Bengal, Jharkhand" />
      <meta property="og:title" content="Communique Concrete - Quality Readymix Concrete Solutions" />
      <meta property="og:description" content="Leading manufacturer of high-quality readymix concrete solutions. Serving West Bengal and Jharkhand with precision, integrity, and excellence." />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://communiqueconcrete.com" />
    </Helmet>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
  ,
)
