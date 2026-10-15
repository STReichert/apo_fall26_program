// ENTRY POINT — the first JavaScript file the browser runs (see index.html).
// Its only job: load the global styles and tell React to draw <App />
// inside the empty <div id="root"> in index.html.
import React from 'react'
import ReactDOM from 'react-dom/client'
// Global styles load FIRST, so each component's own CSS (pulled in by
// App.jsx below) comes later and wins when two rules are equally specific.
import './styles/tokens.css'
import './styles/global.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
