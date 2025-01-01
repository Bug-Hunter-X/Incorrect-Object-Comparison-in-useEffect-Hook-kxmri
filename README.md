# Incorrect Object Comparison in useEffect Hook

This repository demonstrates a common error in React's `useEffect` hook: incorrectly comparing objects for changes.  The provided code attempts to detect changes in an object passed as a prop, but uses the strict equality (`!==`) operator which compares object references rather than object values. This leads to unexpected behavior or, worse, an infinite rendering loop.

The `bug.js` file contains the erroneous code. The solution, found in `bugSolution.js`, demonstrates the proper way to perform deep comparison or use shallow comparison if appropriate to determine actual changes in the object's values.