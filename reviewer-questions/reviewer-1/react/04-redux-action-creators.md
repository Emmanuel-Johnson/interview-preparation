Action creators are functions that create and return Redux action objects (objects that contain a type and optional payload)..
They help send data or events to reducers to update the state.
They make Redux code cleaner and reusable.


The action creator (addMovie) creates and returns the action object first.

```js
dispatch(addMovie("Inception"));
```

Here:

```js
addMovie("Inception")
```

returns:

```js
{
  type: "movies/addMovie",
  payload: "Inception"
}
```

Then dispatch() sends that object to the reducer.