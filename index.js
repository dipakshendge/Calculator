
// console.log("hello")
    let screen= document.querySelector('.screen')
    let buttons=document.querySelectorAll(".btn")
    let clear=  document.querySelector(".btn-clear")
    let equal=  document.querySelector(".btn-equal")


    buttons.forEach((button)=>{
        button.addEventListener('click',function(e){
            // console.log(e)
            
                if(e.target.dataset.num=="="){
                    let ans =eval(screen.value);
                    screen.value=ans;
                }else if(e.target.dataset.num=="c"){
                    screen.value='';
                }
                else{
                    let result=e.target.dataset.num;
                screen.value +=result
                }
            
            // console.log(screen.value)
        })
        
    });
    