
let screenSize=document.querySelector('.screen');
let buttons=document.querySelectorAll(`.common`);
console.log(buttons);
let screenValue="";

buttons.forEach(btn=>{

    btn.addEventListener("click",(e)=>{
      let buttonText =  e.target.innerText;
        console.log(buttonText);
        if(buttonText=="C"){
            screenValue="";
            screenSize.value=screenValue;
        }else if(buttonText=="="){
            screenSize.value=  eval(screenValue);
        }else{
            screenValue+=buttonText;
            screenSize.value  = screenValue;
        }
    });
})