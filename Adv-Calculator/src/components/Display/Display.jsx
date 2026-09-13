import styles from "./Display.module.css";

export default function Display({ value, operator, previousValue }) {
  return (
    <div className={styles.display}>
      {previousValue !== null && (
        <span className={styles.expression}>
          {previousValue} {operator}
        </span>
      )}
      <span className={styles.value}>{value}</span>
    </div>
  );
}