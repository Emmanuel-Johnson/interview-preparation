# Handling Runtime Errors in React ⚛️

A **runtime error** is an error that happens while the application is
**running**, not during compilation.

Example:

``` javascript
const user = null;
console.log(user.name); // ❌ runtime error
```

Error:

    Cannot read property 'name' of null

React apps must handle these errors so the **entire UI doesn't crash**.

------------------------------------------------------------------------

# Ways to Handle Runtime Errors in React

## 1️⃣ Using Error Boundaries (Main Method)

React provides **Error Boundaries** to catch runtime errors in UI
components.

### Example

``` jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong</h2>;
    }

    return this.props.children;
  }
}
```

### Usage

``` jsx
<ErrorBoundary>
   <Profile />
</ErrorBoundary>
```

If **Profile crashes → fallback UI appears**.

------------------------------------------------------------------------

## 2️⃣ Using try...catch (For Functions / Event Handlers)

Error Boundaries **do NOT catch errors in event handlers**, so we use
`try...catch`.

### Example

``` jsx
function handleClick() {
  try {
    riskyFunction();
  } catch (error) {
    console.log("Error occurred:", error);
  }
}

<button onClick={handleClick}>Click</button>
```

------------------------------------------------------------------------

## 3️⃣ Handling API Errors

Runtime errors often happen when **fetching data from APIs**.

### Example

``` javascript
async function getUsers() {
  try {
    const res = await fetch("/api/users");
    const data = await res.json();
  } catch (error) {
    console.log("API Error:", error);
  }
}
```

------------------------------------------------------------------------

## 4️⃣ Conditional Rendering (Prevent Errors)

Sometimes errors happen because **data is undefined**.

### Bad Example

``` jsx
<h1>{user.name}</h1>
```

If `user` is **null → crash**.

### Safe Versions

``` jsx
<h1>{user?.name}</h1>
```

or

``` jsx
{user && <h1>{user.name}</h1>}
```

------------------------------------------------------------------------

## 5️⃣ Default Values

``` javascript
const username = user?.name || "Guest";
```

This **prevents runtime errors** and provides a fallback value.

------------------------------------------------------------------------

# Summary

  Method                  Used For
  ----------------------- ----------------------------
  Error Boundaries        Component rendering errors
  try...catch             Event handlers / functions
  API error handling      Fetch requests
  Conditional rendering   Prevent undefined errors

------------------------------------------------------------------------

# Simple Rule

    UI error → Error Boundary
    Function error → try/catch
    API error → try/catch
    Data missing → conditional rendering