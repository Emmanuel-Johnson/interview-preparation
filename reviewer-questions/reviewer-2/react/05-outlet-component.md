Outlet is a component from React Router used for nested routing.
It shows the child route component inside the parent route layout.
It helps create shared layouts like navbar or sidebar across pages.


```js
// App.js
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Child pages will render here */}
      <Outlet />
    </>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

```

Practical meaning

- Layout has common UI like navbar.
- <Outlet /> is the place where child pages appear.
- If URL is /home, Home component renders inside Outlet.
- If URL is /about, About component renders inside Outlet.