import styles from "./Calculator.module.css";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

export default function Calculator({ calculator }) {
  return (
    <div className={styles.calculator}>
      <Display
        value={calculator.displayValue}
        operator={calculator.operator}
        previousValue={calculator.previousValue}
      />
      <Keypad calculator={calculator} />
    </div>
  );
}