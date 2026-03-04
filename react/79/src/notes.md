What is React Router DOM?

react-router-dom is a library that lets you create multiple pages inside a single React application.

Example pages:

Home

About

Contact

Dashboard

But technically it is still one single-page application (SPA).

Install React Router

First you install it.

npm install react-router-dom
Basic Routing Structure

The routing system normally lives in your App.js.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
Important Components
1️⃣ BrowserRouter

This wraps the entire application.

<BrowserRouter>

It enables routing using the browser history API.

Without this, routing will not work.

2️⃣ Routes

Routes is the container for all routes.

<Routes>

It decides which component should render based on the URL.

3️⃣ Route

Route defines the mapping between URL and component.

<Route path="/about" element={<About />} />

Meaning:

If the URL becomes:

localhost:3000/about

React will render the About component.

Navigation Between Pages

To move between pages we use Link instead of <a> tag.

Example
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

Why not <a>?

Because <a> reloads the whole page.
Link changes the route without refreshing the page.

useNavigate Hook

Used for programmatic navigation.

Example: after login redirect to dashboard.

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard");
  }

  return <button onClick={handleLogin}>Login</button>;
}
useParams

Used to get dynamic values from URL.

Example URL:

/user/10

Route:

<Route path="/user/:id" element={<User />} />

Component:

import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return <h1>User ID: {id}</h1>;
}
Nested Routing (Used in Dashboards)

Example:

/dashboard/profile
/dashboard/settings

Example structure:

<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
Very Common Interview Questions
What is React Router DOM?

A library used to implement client-side routing in React applications.

What is BrowserRouter?

It uses the browser history API to keep UI in sync with the URL.

Difference between Link and anchor tag?
Link	Anchor
No page reload	Reloads page
Client side navigation	Server navigation
What is useNavigate?

A hook used to navigate programmatically to another route.

What is useParams?

A hook used to extract dynamic parameters from the URL.

One Thing Interviewers Love

If you say this clearly:

React Router enables client-side routing, meaning the browser does not request a new page from the server. Instead React dynamically renders components based on the URL.

That sounds very strong in interviews.