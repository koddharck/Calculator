// OWNER: Daniel (Math Brain)
//
// This is the CORE calculator engine. Dev 2 (Keypad/Display) will import and
// use this hook — they should never write their own math or state logic.
//
// MUST RETURN (this is the contract — see README.md):
// {
//   displayValue,        // string shown on screen
//   handleDigit,         // (digit) => void
//   handleDecimal,       // () => void
//   handleOperator,      // (operator) => void
//   handlePercentage,    // () => void
//   handleToggleSign,    // () => void
//   handleEquals,        // () => { expression, result, timestamp }
//   handleClear,         // () => void
//   handleDelete,        // () => void
// }
//
// TODO:
// - internal state: displayValue, previousValue, operator, overwrite flag
// - wire each handler above using calculate.js and formatNumber.js
// - support chained operations (5 + 3 + 2) and repeat-equals behavior
