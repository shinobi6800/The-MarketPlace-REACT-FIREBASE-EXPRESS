import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from 'react-router'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'

function App() {


  const router = createBrowserRouter([
    {path:"/Signup",
     element:<SignUpPage/>,
    },
    {path:"/Signup",
      element:<SignUpPage/>,
     },
     {
      path:"/Login",
      element:<LoginPage/>
     }
  ])
  return (
    <>
    </>
  )
}

export default App
