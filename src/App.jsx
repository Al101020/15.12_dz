import { Route, Routes } from 'react-router-dom';

// import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Домашнее задание по теме «Redux Saga»</h1>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
