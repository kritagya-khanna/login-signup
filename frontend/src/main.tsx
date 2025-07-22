import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './components/homePage.tsx'
import LoginForm from './components/LoginForm.tsx'
import SigninForm from './components/SigninForm.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage />
    <LoginForm/>
    <SigninForm/>
  </StrictMode>,
)
