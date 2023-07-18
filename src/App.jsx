import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import IndividualArticle from './components/IndividualArticle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/api/articles/:article_id" element={<IndividualArticle />} />
        </Routes>
      </div>
    </>
  )
}

export default App
