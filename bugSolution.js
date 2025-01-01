```javascript
import { useState, useEffect } from 'react';
import { shallowEqual } from 'shallow-equal'; // Or a custom deep comparison function

function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Use shallowEqual or a custom deep comparison function
    if (!shallowEqual(props.someObject, prevProps.someObject)) {
      console.log('Objects are different!');
    }
  }, [props.someObject]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```