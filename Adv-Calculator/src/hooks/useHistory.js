// OWNER: Bolade (The Memory)
//
// Manages the list of past calculations and saves them so they survive
// a page refresh (use localStorage).
//
// MUST RETURN (this is the contract — see README.md):
// {
//   history,        // array of { id, expression, result, timestamp }
//   addEntry,       // (expression, result) => void
//   clearHistory,   // () => void
//   selectEntry,    // (id) => returns the result so it can be loaded back in
// }
//
// TODO:
// - read/write the history array to localStorage
// - addEntry() should be called right after Dev 1's handleEquals() produces a result
//   (this wiring happens in App.jsx, owned by Dev 4 — you just expose addEntry)
