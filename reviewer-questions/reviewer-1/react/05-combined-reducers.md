Combined reducers are multiple reducers merged into one root reducer using combineReducers().
Each reducer manages its own part of the Redux state.
This keeps the store organized and easier to manage.


In Redux Toolkit, combined reducers are usually inside configureStore().

```js
export const store = configureStore({
  reducer: {
    movies: movieReducer,
    users: userReducer,
  }
});
```
Here, Redux Toolkit internally uses combineReducers() to merge movieReducer and userReducer into one root reducer.