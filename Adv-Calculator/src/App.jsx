import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import { HistoryProvider } from './context/HistoryContext'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import Calculator from './components/Calculator/Calculator'
import HistoryPanel from './components/History/HistoryPanel'

function App() {
  return (
    <ThemeProvider>
      <HistoryProvider>
        <div className="app-shell">
          <ThemeToggle />
          <Calculator />
          <HistoryPanel />
        </div>
      </HistoryProvider>
    </ThemeProvider>
  )
}

export default App
