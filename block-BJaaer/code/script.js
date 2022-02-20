let form=document.querySelector(`form`);

let modal=document.querySelector(`.overlay`)

let modalInfo=document.querySelector(`.modal-info`)

let userData={};


form.addEventListener(`submit`,(event)=>{
   event.preventDefault();
   let element=event.target.elements;
userData.name=element.name.value;
userData.email=element.email.value;
userData.choice=element.choice.value;
userData.color=element.color.value;
userData.range=element.range.value;
userData.drone=element.drone.value;
userData.terms=element.terms.checked;


let close=document.querySelector(`.modal-close`);
close.addEventListener(`click`,(event)=>{
    location.reload();
})
    displayInfo(userData);
})


function displayInfo(data={}){
    modalInfo.innerHTML="";
    let h1=document.createElement(`h1`);
    h1.innerText=`hello--${data.name}`;

    let email=document.createElement(`p`);
    email.innerText=`email--${data.email}`;

    let choice=document.createElement(`p`);
    choice.innerText=`movie--${data.choice}`;

    let color=document.createElement(`p`)
    color.innerText=`color--${data.color}`

    let range=document.createElement(`p`)
    range.innerText=`range--${data.range}`

    let drone=document.createElement(`p`)
    drone.innerText=`drone--${data.drone}`

    let terms=document.createElement(`p`);
    terms.innerText=`${data.terms== true ? "you have acceppted" : "you have not accept"}`;
    
    modalInfo.append(h1,email,choice,color,range,drone,terms);
}
displayInfo(userData);





