useMemo is a React Hook used to cache expensive calculations between renders.
It only recalculates the value when the dependency changes, which helps improve performance.
It should be used only when recalculations are costly or causing unnecessary renders.


useMemo is a React Hook used to store a calculated value so React doesn’t recalculate it on every render.

It improves performance when a calculation is expensive.

Simple Example
```js
import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const doubled = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1>{doubled}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}
```

What happens here?

- doubled is calculated using useMemo
- It recalculates only when count changes
- Changing dark will re-render the component, but React will reuse the old doubled value

Without useMemo, count * 2 runs on every render.


useMemo can increase complexity and memory usage if used unnecessarily.
It only helps for expensive calculations, not simple ones.
Wrong dependencies can also cause stale or incorrect values.