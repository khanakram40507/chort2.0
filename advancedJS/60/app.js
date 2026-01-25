
// ## Exercise 2 — Intermediate (Data flow)

// **Task (Hindi):** Ek function banao `getUser`

// **Requirements:**
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`

// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`

// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho

// **Goal:**
// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice

// ---


function getUser(username, cb) {
  setTimeout(() => {
    cb({
      id: 1,
      username: "ak"
    });
  }, 1000);
}
function getUserPosts(userId, cb) {
  setTimeout(() => {
    cb([
      "Post 1",
      "Post 2",
      "Post 3"
    ]);
  }, 1000);
}
getUser("ak", function(data){
    getUserPosts(data.id, function(posts){
        console.log("Username:", data.username);
        console.log("Posts:", posts);
    }   );  
}   );
