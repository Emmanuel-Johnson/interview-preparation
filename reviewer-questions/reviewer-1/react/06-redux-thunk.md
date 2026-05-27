Redux Thunk is middleware that lets Redux handle async tasks like API calls.
It allows action creators to return a function instead of a plain action object.
In Redux Toolkit, thunk support is already included by default.


In Redux Toolkit, Redux Thunk works automatically inside async actions like createAsyncThunk().

```js
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async () => {
    const response = await fetch("/api/movies");
    return response.json();
  }
);
```

Here, the thunk handles the async API call and dispatches actions like pending, fulfilled, and rejected automatically.