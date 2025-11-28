let btn=document.querySelectorAll('button');
btn.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.innerHTML==="Add Friend"){
            button.innerHTML="remove Friend";
        }
        else{
            button.innerHTML="Add Friend";
        }
    });
});