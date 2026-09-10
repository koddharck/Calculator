import styles from './History.module.css'

export default function HistoryItem({ entry, selectEntry }) {
       function handleSelect() {
	       selectEntry(entry.id)
       }

       return (
	       <li>
		       <button className={styles.item} type="button" onClick={handleSelect}>
			       <span className={styles.expression}>{entry.expression}</span>
			       <span className={styles.result}>= {entry.result}</span>
		       </button>
	       </li>
       )
}
