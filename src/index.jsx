import { App } from './App';
import './styles/global.css'
import './styles/commomStyles.css'

import { AuthProvider } from './context/AuthProvider';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
