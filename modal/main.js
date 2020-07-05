const parent=document.querySelector(".modal-parent");
const btn =document.querySelector("button");
const x=document.querySelector(".X");
const section=document.querySelector('section');

btn.addEventListener('click',()=>{
    parent.style.display="block";
    section.style.filter='blur(10px)';
});

x.addEventListener('click',()=>{
    parent.style.display="none";
    section.style.filter='blur(0px)'; 
});

parent.addEventListener('click',(e)=>{
    if(e.target.className =='modal-parent'){
        parent.style.display="none";
        section.style.filter='blur(0px)';   
    }
})