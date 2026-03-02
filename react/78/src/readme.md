🔹 What is useEffect in React?

useEffect is a Hook that lets you run side effects in a functional component.

Side effects mean:
API calls
Subscriptions
Timers
DOM manipulation
Event listeners

React components should normally just return UI. ** imp line 


Basic Syntax
useEffect(() => {
  // side effect code here
}, [dependencies]);

It takes two arguments:
A function (effect function)
A dependency array

🔹 When Does useEffect Run?

This is what interviewers really test.

1️⃣ No dependency array
useEffect(() => {
  console.log("Runs on every render");
});

👉 Runs after every render

2️⃣ Empty dependency array
useEffect(() => {
  console.log("Runs only once");
}, []);

👉 Runs only once (after first render)

This is used for:

API calls

Initial setup

Interview question:
Why does it run only once?
Because dependencies never change.

3️⃣ With dependency
useEffect(() => {
  console.log("Runs when count changes");
}, [count]);

👉 Runs when count changes

React compares previous value and new value.

🔹 Real Industry Example (API Call)
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

This is how it’s used in real projects.

🔹 Cleanup Function (Very Important)

Interviewers love this.

useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);

The function returned inside useEffect is called the cleanup function.

It runs:

Before component unmounts

Before next effect runs

Used for:

Clearing timers

Removing event listeners

Cancelling subscriptions

🔹 Important Interview Questions

Here’s what they may ask you:

❓ Why do we need useEffect?

To handle side effects outside rendering logic.

❓ What happens if dependency array is wrong?

You may get:

Infinite loop

Stale data

Unnecessary re-renders

❓ What causes infinite loop?
useEffect(() => {
  setCount(count + 1);
}, [count]);

Because:

Effect runs

State updates

Component re-renders

Effect runs again

Loop continues

🔹 Industrial Level Understanding

What this really means is:

useEffect runs after render phase.

React flow:

Render UI

Paint to screen

Then run useEffect

It does NOT block rendering.

🔹 Advanced Level (For Strong Impression)

Multiple useEffect is allowed

Effects are executed in order they appear

React Strict Mode runs effects twice in development (to detect bugs)

If you say this in interview — they know you understand deeply.