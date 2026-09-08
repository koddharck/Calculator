// OWNER: Dev 4 (Stylist + Glue)
//
// Manages the light/dark theme and saves the user's preference (localStorage).
//
// MUST RETURN (this is the contract — see README.md):
// {
//   theme,         // "light" | "dark"
//   toggleTheme,   // () => void
// }
//
// TODO:
// - store the current theme in state, default to "light" (or read saved preference)
// - toggleTheme() should flip the value and save it to localStorage
// - apply the theme by setting a data-theme attribute on the <html> or root element,
//   so styles/themes.css can react to it automatically
