import { useEffect, useState } from 'react'

const HISTORY_STORAGE_KEY = 'calculator-history'

function readStoredHistory() {
       if (typeof window === 'undefined') {
	       return []
       }

       try {
	       const storedHistory = window.localStorage.getItem(HISTORY_STORAGE_KEY)
	       const parsedHistory = storedHistory ? JSON.parse(storedHistory) : []

	       return Array.isArray(parsedHistory) ? parsedHistory : []
       } catch {
	       return []
       }
}

export function useHistory() {
       const [history, setHistory] = useState(readStoredHistory)

       useEffect(() => {
	       try {
		       window.localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history))
	       } catch {
	       }
       }, [history])

       function addEntry(expression, result) {
	       const entry = {
		       id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
		       expression,
		       result,
		       timestamp: new Date().toISOString(),
	       }

	       setHistory((currentHistory) => [entry, ...currentHistory])
       }

       function clearHistory() {
	       setHistory([])
       }

       function selectEntry(id) {
	       return history.find((entry) => entry.id === id)?.result
       }

       return { history, addEntry, clearHistory, selectEntry }
}

