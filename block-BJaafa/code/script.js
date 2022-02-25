let  key=document.querySelector(`h2`);
let discription=document.querySelector(`p`);
let button=document.querySelector(`button`);

function genratorRnadomNumber(max){
return Math.floor(Math.random()*max);
}

function handle(){
    let randomIndex=genratorRnadomNumber(data.length);
    let randomShortcuts=data[randomIndex];
    key.innerText=randomShortcuts.name;
    discription.innerText=randomShortcuts.discription;
}

button.addEventListener("click",handle)