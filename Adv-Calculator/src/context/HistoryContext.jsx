// OWNER: Dev 3 (The Memory)
//
// Makes the history list and its functions available anywhere in the app
// without passing props down manually through every component.
//
// TODO:
// - create HistoryContext with React.createContext()
// - create a HistoryProvider that uses useHistory() internally and
//   passes { history, addEntry, clearHistory, selectEntry } down via context
