# IT313 Lab 5 - Lab Timer & Practice Tracker

## The Problem

A lab instructor wants a small screen students can use during laboratory sessions to
track how many practice problems they have solved and how long they have been working.

## Approach

- **LabScreen** owns the state: `solved` (starts at 0) and `isRunning` (starts at false).
  "Solve +1" uses the functional update form `setSolved(s => s + 1)`. It passes state
  and handlers down as props (lifting state up).
- **useStopwatch(isRunning)** is a custom hook. It keeps `seconds` in `useState` and uses
  `useEffect` with `setInterval` to add one second every 1000 ms while `isRunning` is true.
  The cleanup function clears the interval when `isRunning` becomes false and when the
  component unmounts.
- **PracticeTracker** shows "Solved: N", the Solve +1 and Reset buttons, and "Great job!"
  once `solved` reaches 5 (conditional rendering).
- **Stopwatch** shows the elapsed time as mm:ss and "Running..." or "Paused".
- **AppButton** is a small reusable button used by every button on the screen.
- Every `onPress` receives a function reference and is never called directly in JSX.

## How to Run (Expo Go)

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go, or press `w` for web / `a` for an Android emulator.
