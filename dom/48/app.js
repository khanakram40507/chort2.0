
let cursor=document.querySelector('img');
let body=document.querySelector('body');

body.addEventListener('mousemove',(e)=>{
    cursor.style.left=`${e.x}px`;
    cursor.style.top=`${e.y}px`;
});