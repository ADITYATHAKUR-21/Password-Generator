import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react';
import './index.css'
import Password from './Password.jsx'
import Navbar from './Navbar.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <Navbar/>
    <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
      <Password/>
    </div>
  </ClerkProvider>
);









