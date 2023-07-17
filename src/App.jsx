import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from '../components/HomePage'
import Header from '../components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <HomePage />
      </div>
    </>
  )
}

export default App
