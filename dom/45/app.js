let grow=0;
let btn=document.querySelector('button');
let h2=document.querySelector('h2');
let inner=document.querySelector('.inner')
btn.addEventListener('click',()=>{
    btn.style.pointerEvents="none";
    btn.style.opacity=0.4;
    btn.style.pointerEvents="none";
    btn.innerHTML="Downloading...";
   
   let download= setInterval(()=>{
    
         grow++;
         h2.innerHTML=`${grow}%`
         inner.style.width=`${grow}%`
    },100);

    setTimeout(()=>{
        clearInterval(download);
        btn.innerHTML="Downloaded";
       
    },10000)
   
})