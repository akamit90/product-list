import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Products />
    </>
  )
}

export default App
