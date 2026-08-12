import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App.jsx'
import './index.css'

// expose a SPA-friendly navigation helper so non-React code (e.g. axios interceptors)
// can navigate without forcing a full page reload. It uses the History API and
// dispatches a popstate event so React Router responds to the change.
window.appNavigate = (path) => {
    try {
        window.history.pushState({}, '', path);
        window.dispatchEvent(new PopStateEvent('popstate'));
    } catch (e) {
        // fallback to hard navigation
        window.location.href = path;
    }
}

createRoot(document.getElementById('root')).render(
    <>
        <App />
    </>
)
