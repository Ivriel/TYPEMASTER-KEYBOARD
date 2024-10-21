// main.jsx
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Import App component
import "bootstrap/dist/css/bootstrap.css";
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
