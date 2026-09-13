import { createContext, useContext } from 'react'
import { useHistory } from '../hooks/useHistory'

export const HistoryContext = createContext(null)

export function useHistoryContext() {
	return useContext(HistoryContext)
}

export function HistoryProvider({ children }) {
       const { history, addEntry, clearHistory, selectEntry } = useHistory()

       return (
	       <HistoryContext.Provider value={{ history, addEntry, clearHistory, selectEntry }}>
		       {children}
	       </HistoryContext.Provider>
       )
}
