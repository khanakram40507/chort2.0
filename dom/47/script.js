let users = [
  {
    fullname: "Aarav Kapoor",
    username: "aarav.kapoor",
    profession: "Frontend Engineer",
    img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Builds pixel-perfect UI, loves accessibility and micro-interactions.",
    tags: ["frontend", "react", "accessibility"]
  },
  {
    fullname: "Maya Reddy",
    username: "maya.reddy",
    profession: "Product Designer",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    description: "Designs user-centered products and prototypes; strong visual design sense.",
    tags: ["ux", "ui", "prototyping"]
  },
  {
    fullname: "Leo Martins",
    username: "leo_martins",
    profession: "Backend Developer",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    description: "API-first developer; loves databases, observability and clean architecture.",
    tags: ["backend", "nodejs", "databases"]
  },
  {
    fullname: "Nina Petrova",
    username: "nina.p",
    profession: "Photographer",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Visual storyteller specialising in portraits and street photography.",
    tags: ["photography", "visuals", "portraits"]
  },
  {
    fullname: "David Kim",
    username: "davidkim",
    profession: "Content Writer",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    description: "Writes technical articles and developer docs; loves clear explanations.",
    tags: ["writing", "tech", "documentation"]
  }
];

let sum='';
users.forEach(function(user) {
    sum= sum + `<div class="card">
                <img src="${user.img}" alt="">
                <h1>${user.fullname}</h1>
                <h2>${user.profession}</h2>
                <p>${user.description}</p>
            </div>`;
});
let main=document.querySelector('main');
main.innerHTML=sum;
