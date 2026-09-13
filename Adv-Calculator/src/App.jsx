import { useState } from 'react'
import './App.css'
import Calculator from './components/Calculator/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#0d0d0d" }}>
      <Calculator />
    </div>
  );
}

export default App
