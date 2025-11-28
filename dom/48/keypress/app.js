let h1=document.querySelector('h1');
let body=document.querySelector('body');

body.addEventListener('keydown',(e)=>{
    h1.innerText=` ${e.key}`;
});
