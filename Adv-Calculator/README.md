# Advanced Calculator (React)

A fully functional, responsive calculator app built with React — supporting basic operations, calculation history, and light/dark theming.

---

## 🗂 Folder Structure

```
advanced-calculator/
├── public/
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── Calculator/
│   │   │   ├── Calculator.jsx
│   │   │   └── Calculator.module.css
│   │   ├── Display/
│   │   │   ├── Display.jsx
│   │   │   └── Display.module.css
│   │   ├── Keypad/
│   │   │   ├── Keypad.jsx
│   │   │   └── Keypad.module.css
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.module.css
│   │   ├── History/
│   │   │   ├── HistoryPanel.jsx
│   │   │   ├── HistoryItem.jsx
│   │   │   └── History.module.css
│   │   └── ThemeToggle/
│   │       ├── ThemeToggle.jsx
│   │       └── ThemeToggle.module.css
│   │
│   ├── context/
│   │   ├── ThemeContext.jsx
│   │   └── HistoryContext.jsx
│   │
│   ├── hooks/
│   │   ├── useCalculator.js
│   │   ├── useHistory.js
│   │   └── useTheme.js
│   │
│   ├── utils/
│   │   ├── calculate.js
│   │   ├── formatNumber.js
│   │   └── constants.js
│   │
│   ├── styles/
│   │   ├── variables.css
│   │   ├── globals.css
│   │   └── themes.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## 👥 Who Builds What

| Dev | Nickname | Owns |
|---|---|---|
| **Daniel** | The Math Brain | `utils/calculate.js`, `utils/formatNumber.js`, `utils/constants.js`, `hooks/useCalculator.js` |

| **David** | The Face | `components/Display/`, `components/Keypad/`, `components/Button/` |

| **Bolade** | The Memory | `context/HistoryContext.jsx`, `hooks/useHistory.js`, `components/History/` |

| **James** | The Stylist + Glue | `context/ThemeContext.jsx`, `hooks/useTheme.js`, `components/ThemeToggle/`, `styles/`, `App.jsx`, `main.jsx` |

**Rule of thumb:** only touch files inside your own section. If you need something from someone else's file, ask them instead of editing it yourself.

---

## 🔌 Hook Contracts (what each hook must return)

### `useCalculator()` — Daniel
| Returns | Type | Purpose |
|---|---|---|
| `displayValue` | string | Current number shown on screen |
| `handleDigit(digit)` | function | Called on number button press |
| `handleDecimal()` | function | Called on `.` press |
| `handleOperator(op)` | function | Called on `+ − × ÷` press |
| `handlePercentage()` | function | Called on `%` press |
| `handleToggleSign()` | function | Called on `+/−` press |
| `handleEquals()` | function → `{ expression, result, timestamp }` | Called on `=` press |
| `handleClear()` | function | Called on `C` press |
| `handleDelete()` | function | Called on backspace press |

### `useHistory()` — Bolade
| Returns | Type | Purpose |
|---|---|---|
| `history` | array | List of past calculations |
| `addEntry(expression, result)` | function | Saves a new entry |
| `clearHistory()` | function | Empties the list |
| `selectEntry(id)` | function | Loads a past result back into the calculator |

### `useTheme()` — James
| Returns | Type | Purpose |
|---|---|---|
| `theme` | `"light"` \| `"dark"` | Current theme |
| `toggleTheme()` | function | Switches theme |

> **Note on David:** David doesn't own a hook — you're a *consumer*, not a builder, in this section. You'll import `useCalculator()` directly inside your `Keypad`/`Button` components and call its functions (`handleDigit`, `handleOperator`, `handleEquals`, etc.) on each button press. Nothing new to document here — just read Dev 1's contract above and wire your buttons to it.

---

## 🌿 Git Workflow — Why We Use Branches (Read This Before You Start)

We're all working in **one repo**, which is efficient — but only if we avoid stepping on each other's code. Here's the problem we're avoiding, in plain terms:

### What happens if everyone pushes straight to `main`
Imagine 2 people both edit `App.jsx` at the same time and both push to `main`. Git doesn't know whose changes should "win" — it sees two different versions of the same lines and gets confused. This is called a **merge conflict**. When it happens on a shared branch like `main`, it can:
- Break the app for everyone until someone manually fixes it
- Accidentally delete or overwrite a teammate's work
- Cause confusing bugs where "it worked yesterday" but nobody knows what changed

The more people pushing directly to `main` at once, the more often this happens — and it gets messy fast with 4 people.

### How we avoid it: branches + Pull Requests (PRs)

1. **Each person works on their own branch**, named after their part:
   - `feature/calc-engine` (Daniel)
   - `feature/keypad-ui` (David)
   - `feature/history` (Bolade)
   - `feature/theme-shell` (James)

2. A branch is basically your own private copy of the project to experiment in — nothing you do there affects `main` or anyone else, until you're ready.

3. When your part is working, open a **Pull Request (PR)** — this is a request to merge your branch into `main`. It shows exactly what lines you're adding/changing, so:
   - The team can review it before it goes live
   - If two people touched the same file, GitHub flags the conflict clearly, in one place — instead of it silently breaking `main`

4. Once approved, merge the PR into `main`. Pull the latest `main` into your own branch regularly so you're not working on outdated code.

### Simple rules to follow
- **Never edit `main` directly.**
- **Never edit a file inside someone else's folder** — even on your own branch. If you need a change there, ask them or open a small PR just for that.
- **Commit often, with clear messages** (e.g. `feat: add percentage calculation logic`), so it's easy to track who changed what.
- **Pull before you push** — always grab the latest `main` before starting new work, so you're not building on stale code.

Following this means 4 people can work at the same time, on the same repo, without breaking each other's progress.
