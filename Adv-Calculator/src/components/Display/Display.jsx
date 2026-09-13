import styles from "./Display.module.css";

export default function Display({ value }) {
    return (
        <div className={styles.display}>
            <span className={styles.value}>{value}</span>
        </div>
    );
}