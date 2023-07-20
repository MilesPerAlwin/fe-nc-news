import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import IndividualArticle from './components/IndividualArticle'
import SignedInAs from './components/SignedInAs'

function App() {

  return (
    <>
      <div className="mainBody">
        <SignedInAs />
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