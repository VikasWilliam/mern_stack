import { useState, react } from 'react'
import './App.css'
import User from './getUser/USer'
import AppRouter from './Router'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <AppRouter />
      <Toaster />
    </div>
  )
}

export default App
