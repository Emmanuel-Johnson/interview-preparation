# getDerivedStateFromError() in React

`getDerivedStateFromError()` is a **static lifecycle method** used in
**Error Boundaries** to update the component state when an error happens
in a child component.

Its main job is to **show a fallback UI instead of the broken
component**.

------------------------------------------------------------------------

## Syntax

``` jsx
static getDerivedStateFromError(error) {
  return { hasError: true };
}
```

------------------------------------------------------------------------

## Parameter

### error

The JavaScript error that occurred in the child component.

Example:

    TypeError: Cannot read property 'name' of undefined

------------------------------------------------------------------------

# Why it is used

When a component crashes:

    Child component throws error
            ↓
    getDerivedStateFromError() runs
            ↓
    State is updated
            ↓
    Fallback UI is rendered

So the **app does not completely crash**.

------------------------------------------------------------------------

# Example

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

## Buggy Component

``` jsx
function BuggyComponent() {
  throw new Error("Crash!");
}
```

------------------------------------------------------------------------

## App

``` jsx
<ErrorBoundary>
   <BuggyComponent />
</ErrorBoundary>
```

------------------------------------------------------------------------

## Output

    Something went wrong.

Instead of the whole React app crashing.

------------------------------------------------------------------------

# Why it is static

React calls it **before rendering**, so it **cannot access `this`**.

That's why it is written as:

``` jsx
static getDerivedStateFromError()
```

------------------------------------------------------------------------

# Flow of Error Boundary

    Error occurs
          ↓
    getDerivedStateFromError()
          ↓
    state.hasError = true
          ↓
    render fallback UI
          ↓
    componentDidCatch() logs error

------------------------------------------------------------------------

# Difference (Very Important)

  Method                       Purpose
  ---------------------------- ----------------------------------------------
  getDerivedStateFromError()   Updates state to display fallback UI
  componentDidCatch()          Logs error or sends it to monitoring service

------------------------------------------------------------------------

# Simple Way to Remember

    getDerivedStateFromError → change UI
    componentDidCatch → log error