let colorBtn=document.querySelector('.color');
let changColor=document.querySelector('body');
let colors=['yellow','red','green','gray'];

colorBtn.addEventListener('click', onClick);

function onClick(){
    // changColor.style.backgroundColor=colors[2];
    changColor.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)]
}