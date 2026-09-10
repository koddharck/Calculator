import styles from "./Keypad.module.css";
import Button from "../Button/Button";

const BUTTON_ROWS = [
  [
    { label: "C", variant: "action" },
    { label: "⌫", variant: "action" },
    { label: "%", variant: "operator" },
    { label: "÷", variant: "operator" },
  ],
  [
    { label: "1", variant: "number" },
    { label: "2", variant: "number" },
    { label: "3", variant: "number" },
    { label: "×", variant: "operator" },
  ],
  [
    { label: "4", variant: "number" },
    { label: "5", variant: "number" },
    { label: "6", variant: "number" },
    { label: "-", variant: "operator" },
  ],
  [
    { label: "7", variant: "number" },
    { label: "8", variant: "number" },
    { label: "9", variant: "number" },
    { label: "+", variant: "operator" },
  ],
  [
    { label: "+/-", variant: "action" },
    { label: "0", variant: "number" },
    { label: ".", variant: "number" },
    { label: "=", variant: "operator" },
  ],
];

const OPERATORS = ["+", "-", "×", "÷"];

export default function Keypad({ calculator }) {
  const {
    handleDigit,
    handleDecimal,
    handleOperator,
    handlePercentage,
    handleToggleSign,
    handleEquals,
    handleClear,
    handleDelete,
  } = calculator;

  function handlePress(label) {
    if (!isNaN(label) && label !== " ") return handleDigit(label);
    if (OPERATORS.includes(label)) return handleOperator(label);

    switch (label) {
      case ".":
        return handleDecimal();
      case "%":
        return handlePercentage();
      case "+/-":
        return handleToggleSign();
      case "=":
        return handleEquals();
      case "C":
        return handleClear();
      case "⌫":
        return handleDelete();
      default:
        console.warn(`Unknown button label: ${label}`);
    }
  }

  return (
    <div className={styles.keypad}>
      {BUTTON_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((button) => (
            <Button
              key={button.label}
              label={button.label}
              variant={button.variant}
              onClick={() => handlePress(button.label)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}  