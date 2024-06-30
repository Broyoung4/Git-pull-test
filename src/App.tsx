import './App.css'
import React, { useState } from 'react'

export default function App() {
  const [count, setCount ] = useState(0);
  return (
    <main>
      <button onClick={() => setCount(count + 1) }>ADD</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1) }>Subtract</button>
    </main>
  )
}