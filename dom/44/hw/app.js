let main= document.querySelector('main');
let btn= document.querySelector('button');

const intro = [
  "Hello sir/ma’am, my name is Akram Khan.",
  "I enjoy building applications that are useful and solve real problems.",
  "I started learning development out of curiosity, and now it has become something I genuinely love doing.",
  "I’m mainly comfortable with the MERN stack and Java.",
  "I like understanding how the backend and the whole system works internally.",
  "I completed a freelance e-commerce project (authentication, product management, payments).",
  "I learn fast, adapt quickly, and enjoy working in a team.",
  "I’m looking for an opportunity to grow as a developer and contribute to meaningful projects."
];

btn.addEventListener('click', function() {
    let h1= document.createElement('h1');
    let index= Math.floor(Math.random() * intro.length);
    h1.innerHTML= intro[index];
    h1.style.position= 'absolute';

    let x= Math.floor(Math.random() * 100);
    let y= Math.floor(Math.random() * 100);
    let roatation= Math.floor(Math.random() * 360);
    let randomScale= Math.floor(Math.random() * 3);
    h1.style.left= `${x}%`;
    h1.style.top= `${y}%`;
    h1.style.color= 'white';
    h1.style.rotate= `(${roatation})`;
    h1.style.transform= `scale(${randomScale})`;
    main.appendChild(h1);
});