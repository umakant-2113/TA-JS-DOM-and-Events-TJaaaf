let form=document.querySelector(`form`);


let usernameError="";
let emailError="";
let numberError="";
let passError="";
let conError="";

function contain(str){
    return str.split("").some(e=>Number(e));return str
}

function handle(event){
    event.preventDefault();

    let username=event.target.elements.username;
    // console.log(username);
    let email=event.target.elements.email;
    let number=event.target.elements.mobile;
    let  pass=event.target.elements.password;
    let confirm=event.target.elements.confirm;

    if(username.value===""){
usernameError="can't we empty";
    }else if(username.value.length< 4){
        usernameError="can't be less then four character";
    }else if(contain(username.value)){
        usernameError="must be not a number";
    }else if(email.value===""){
        emailError="can't we empty"; 
    }else if(email.value.length<6){
        emailError="can't be less then six character";   
    }else if(number.value===""){
        numberError="can't we empty"
    }else if(number.value.length<7){
        numberError="can't be less then six character"
    }else if(pass.value===""){
passError="can't we empty";
    }else if(confirm.value===""){
        conError="can't we empty"
    }else if(pass.value===confirm.value){
        conError="this is match";
    }else if(pass.value !==confirm.value){
        conError="this is not  match";
    } 
    let small=document.querySelector(`.s-1`);
    small.innerText=usernameError;  
  p2.innerText=emailError
  small2.innerText=numberError;
  small3.innerText=passError;
  small4.innerText=conError;
 
}
let p2=document.querySelector(`.p2`);
let small2=document.querySelector(`.s2`)
let small3=document.querySelector(`.s3`);
let small4=document.querySelector(`.s4`);


form.addEventListener(`submit`,handle);
