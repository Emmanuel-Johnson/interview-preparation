# React Context API

In React, **Context API** is used to share data across many components
**without passing props manually through every level (prop drilling)**.

------------------------------------------------------------------------

# 1️⃣ Context

**Context** is a way to store and share **global data** in a React
application.

Normally in React:

Parent → Child → Grandchild → GreatGrandchild

If the last component needs data, you must pass props through every
level.

### Example (without context)

``` jsx
<App user="John">
   <Navbar user="John">
      <Profile user="John" />
   </Navbar>
</App>
```

This is called **prop drilling**.

### With Context

You store the value once and any component can access it directly.

Context └── user: "John"

App ├─ Navbar │ └─ Profile → directly gets user from context

**Context = shared data container**.

------------------------------------------------------------------------

# 2️⃣ Context Provider

A **Provider** is the component that **supplies the data to other
components**.

It wraps the components that need access to the context.

### Example

``` javascript
import { createContext } from "react";

const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value="John">
      <Navbar />
    </UserContext.Provider>
  );
}
```

### Explanation

UserContext.Provider
↓
provides value
↓
All child components can access it

**Provider = component that gives the data.**

------------------------------------------------------------------------

# 3️⃣ useContext

`useContext` is a **React Hook** used to read the context value inside a
component.

### Example

``` javascript
import { useContext } from "react";

function Profile() {
  const user = useContext(UserContext);

  return <h1>Hello {user}</h1>;
}
```

### Flow

Provider gives data
↓
useContext reads data

**useContext = get data from context.**

------------------------------------------------------------------------

# 4️⃣ Sending Data from Parent to Child using Context

## Step 1 --- Create Context

``` javascript
import { createContext } from "react";

export const ThemeContext = createContext();
```

## Step 2 --- Provide Data

``` javascript
import { ThemeContext } from "./ThemeContext";

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Navbar />
    </ThemeContext.Provider>
  );
}
```

## Step 3 --- Consume Data

``` javascript
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Navbar() {
  const theme = useContext(ThemeContext);

  return <h1>Theme: {theme}</h1>;
}
```

### Flow Diagram

createContext()
↓
Provider gives value
↓
Child components
↓
useContext reads value

------------------------------------------------------------------------

# 5️⃣ When to Use Context API

Use Context when **many components need the same data**.

### Common Examples

**Authentication** - user - login status - token

**Theme** - dark mode - light mode

**Language** - English - Malayalam - Spanish

**Global settings** - currency - app config

### Example Contexts

-   ThemeContext
-   AuthContext
-   LanguageContext

------------------------------------------------------------------------

# ⚠️ When NOT to Use Context

Do **not** use Context for **frequently changing data** or **local
component state**.

Examples:

-   form input state
-   modal open/close
-   button click state

For these cases, use:

useState