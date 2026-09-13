import styles from "./Calculator.module.css";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";
import useCalculator from "../../hooks/dev2-testing/useCalculator.mock";

export default function Calculator() {
  const calculator = useCalculator();

  return (
    <div className={styles.calculator}>
      <Display value={calculator.displayValue} />
      <Keypad calculator={calculator} />
    </div>
  );
}