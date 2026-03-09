import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { ClerkProvider } from '@clerk/react'

const PUBLISHABLE_KEY = "pk_test_c2FjcmVkLWlndWFuYS01MS5jbGVyay5hY2NvdW50cy5kZXYk"
if(!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey= {PUBLISHABLE_KEY} afterSignOutUrl="/">
    <BrowserRouter >
        <App />
    </BrowserRouter>,
  </ClerkProvider>
 
)
