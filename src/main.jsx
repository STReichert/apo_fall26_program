// ENTRY POINT — the first JavaScript file the browser runs (see index.html).
// Its only job: load the global styles and tell React to draw <App />
// inside the empty <div id="root"> in index.html.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/tokens.css'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
