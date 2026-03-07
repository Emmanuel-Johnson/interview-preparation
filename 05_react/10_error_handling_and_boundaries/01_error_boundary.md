# Error Boundary in React ⚛️

An **Error Boundary** is a special React component that catches
JavaScript errors in child components and shows a fallback UI instead of
crashing the whole app.

Think of it like a **safety net for your UI**.

If one component breaks, the entire React app doesn't crash --- the
Error Boundary shows an error message instead.

------------------------------------------------------------------------

## Why Error Boundaries are needed

### Without Error Boundary

``` jsx
<App>
   <Navbar />
   <Profile />   ❌ error happens here
   <Footer />
</App>
```

If **Profile crashes → the whole app crashes 😵**

### With Error Boundary

``` jsx
<App>
   <Navbar />
   <ErrorBoundary>
       <Profile />  ❌ error happens here
   </ErrorBoundary>
   <Footer />
</App>
```

Now **only Profile fails**, and React shows a fallback UI.

------------------------------------------------------------------------

## How Error Boundary Works

React provides two lifecycle methods:

1.  `static getDerivedStateFromError()`
2.  `componentDidCatch()`

They allow React to detect and handle errors.

------------------------------------------------------------------------

## Basic Error Boundary Example

### Step 1 --- Create ErrorBoundary Component

``` jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error:", error);
    console.log("Error Info:", info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

------------------------------------------------------------------------

### Step 2 --- Wrap Components

``` jsx
import ErrorBoundary from "./ErrorBoundary";
import Profile from "./Profile";

function App() {
  return (
    <ErrorBoundary>
      <Profile />
    </ErrorBoundary>
  );
}

export default App;
```

------------------------------------------------------------------------

## Example Error

``` jsx
function Profile() {
  throw new Error("Profile crashed!");
  return <h1>User Profile</h1>;
}
```

### Output

    Something went wrong.

Instead of crashing the whole app.

------------------------------------------------------------------------

## Important Things to Know ⚠️

### Error Boundaries catch errors in:

-   ✅ Rendering
-   ✅ Lifecycle methods
-   ✅ Constructors

### They DO NOT catch errors in:

-   ❌ Event handlers
-   ❌ Async code (`setTimeout`, `fetch`)
-   ❌ Server-side rendering
-   ❌ Errors inside the error boundary itself

------------------------------------------------------------------------

## Where to Use Error Boundaries

Common places:

``` jsx
<App>
   <Navbar />

   <ErrorBoundary>
       <Dashboard />
   </ErrorBoundary>

   <ErrorBoundary>
       <Chat />
   </ErrorBoundary>

   <Footer />
</App>
```

If **Dashboard crashes**, the **Chat and Navbar still work**.

------------------------------------------------------------------------

## Modern Production Practice

Many apps use libraries like:

    react-error-boundary

Example:

``` jsx
import { ErrorBoundary } from "react-error-boundary";
```

------------------------------------------------------------------------

## Simple Way to Remember

**Error Boundary = React component that catches UI errors and shows
fallback UI.**

    Component crashes
            ↓
    Error Boundary catches it
            ↓
    Fallback UI shown