let ironMan=document.querySelector('#ironman');
let loveIcon=document.querySelector('#love');


ironMan.addEventListener('dblclick',()=>{
    loveIcon.style.opacity=1;
     loveIcon.style.transform= 'translate(-50%, -50%) scale(1) rotate(0deg)';
        setTimeout(()=>{
        
            loveIcon.style.transform= 'translate(50%, -500%) scale(1) rotate(60deg)';
        },800);

        setTimeout(()=>{
            loveIcon.style.opacity=0;            
        },1000);
        setTimeout(()=>{
            loveIcon.style.transform= 'translate(-50%, -50%) scale(0) rotate(-90deg)';
        }
        ,1500);

        



     
});
