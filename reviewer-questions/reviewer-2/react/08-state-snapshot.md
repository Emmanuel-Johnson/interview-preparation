In React, state works like a snapshot of data at a specific render.
Updating state does not change it immediately — React schedules a re-render with the new value.
That’s why logging state right after setState may still show the old value.


Example:

```js
console.log(count); // 0
setCount(1);
console.log(count); // still 0
```

Even after setCount(1), the current render still sees the old value (0).
React updates the state in the next render, creating a new “snapshot” with value 1.