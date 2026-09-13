import { useContext } from 'react'
import HistoryItem from './HistoryItem'
import styles from './History.module.css'
import { HistoryContext } from '../../context/HistoryContext'

export default function HistoryPanel() {
       const { history, clearHistory, selectEntry } = useContext(HistoryContext)

       return (
	       <section className={styles.panel} aria-labelledby="history-title">
		       <header className={styles.header}>
			       <h2 className={styles.title} id="history-title">History</h2>
			       <button
				       className={styles.clearButton}
				       type="button"
				       onClick={clearHistory}
				       disabled={history.length === 0}
			       >
				       Clear history
			       </button>
		       </header>

		       {history.length === 0 ? (
			       <p className={styles.empty}>No calculations yet</p>
		       ) : (
			       <ul className={styles.list} aria-label="Past calculations">
				       {history.map((entry) => (
					       <HistoryItem key={entry.id} entry={entry} selectEntry={selectEntry} />
				       ))}
			       </ul>
		       )}
	       </section>
       )
}
