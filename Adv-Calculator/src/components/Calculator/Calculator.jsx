import styles from "./Calculator.module.css";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";
import useCalculator from "../../hooks/useCalculator";
import { useHistoryContext } from "../../context/HistoryContext";

export default function Calculator() {
  const calculator = useCalculator();
  const { addEntry } = useHistoryContext();

  function handleEqualsAndSave() {
    const completed = calculator.handleEquals();
    if (completed) {
      addEntry(completed.expression, completed.result);
    }
  }

  const calculatorWithHistory = {
    ...calculator,
    handleEquals: handleEqualsAndSave,
  };

  return (
    <div className={styles.calculator}>
      <Display
        value={calculator.displayValue}
        operator={calculator.operator}
        previousValue={calculator.previousValue}
      />
      <Keypad calculator={calculatorWithHistory} />
    </div>
  );
}