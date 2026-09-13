import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { HistoryProvider, useHistoryContext } from "./context/HistoryContext";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import Calculator from "./components/Calculator/Calculator";
import HistoryPanel from "./components/History/HistoryPanel";
import useCalculator from "./hooks/useCalculator";

function AppContent() {
  const calculator = useCalculator();
  const { addEntry, selectEntry } = useHistoryContext();

  function handleEqualsAndSave() {
    const completed = calculator.handleEquals();
    if (completed) {
      addEntry(completed.expression, completed.result);
    }
  }

  function handleSelectEntry(id) {
    const result = selectEntry(id);
    if (result !== undefined) {
      calculator.loadValue(result);
    }
  }

  const calculatorWithHistory = {
    ...calculator,
    handleEquals: handleEqualsAndSave,
  };

  return (
    <div className="app-shell">
      <ThemeToggle />
      <Calculator calculator={calculatorWithHistory} />
      <HistoryPanel onSelectEntry={handleSelectEntry} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <HistoryProvider>
        <AppContent />
      </HistoryProvider>
    </ThemeProvider>
  );
}

export default App;