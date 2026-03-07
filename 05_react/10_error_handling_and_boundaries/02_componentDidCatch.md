# componentDidCatch() in React

`componentDidCatch()` is a lifecycle method used in **Error Boundaries**
to catch errors from child components and log them.

It runs **after an error happens in a child component**.

Think of it as **React's error reporting system**.

------------------------------------------------------------------------

## Syntax

``` jsx
componentDidCatch(error, info) {
  console.log(error);
  console.log(info);
}
```

------------------------------------------------------------------------

## Parameters

### 1️⃣ error

The actual JavaScript error that occurred.

Example:

    Error: Cannot read property 'name' of undefined

------------------------------------------------------------------------

### 2️⃣ info

Additional information about **where the error happened in the component
tree**.

Example:

    Component stack:
       in Profile
       in Dashboard
       in App

------------------------------------------------------------------------

# Full Example

## ErrorBoundary Component

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

## Component with Error

``` jsx
function BuggyComponent() {
  throw new Error("App crashed!");
}
```

------------------------------------------------------------------------

## App

``` jsx
<ErrorBoundary>
   <BuggyComponent />
</ErrorBoundary>
```

When **BuggyComponent crashes**:

    componentDidCatch runs
    ↓
    logs the error
    ↓
    fallback UI appears

------------------------------------------------------------------------

# Why componentDidCatch() is useful

In real **production apps**, it is used to send error logs to monitoring
tools.

Example:

``` jsx
componentDidCatch(error, info) {
  logErrorToService(error, info);
}
```

Common services used:

-   Sentry
-   LogRocket
-   Datadog

These tools help developers **track bugs in live applications**.

------------------------------------------------------------------------

# Difference Between These Two (Important)

  Method                       Purpose
  ---------------------------- -----------------------------------
  getDerivedStateFromError()   Updates state to show fallback UI
  componentDidCatch()          Logs or reports the error

------------------------------------------------------------------------

## Error Flow

    Error happens
          ↓
    getDerivedStateFromError()
          ↓
    UI shows fallback
          ↓
    componentDidCatch()
          ↓
    Error logged

------------------------------------------------------------------------

# Simple Way to Remember

    getDerivedStateFromError → change UI
    componentDidCatch → log error