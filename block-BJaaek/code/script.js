let box1=document.querySelector(`.first`);
let box2=document.querySelector(`.second`);
function colorGenerator(){
    let symbol=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let sym="#";
    for(let i=0; i<6; i++){

sym=sym+symbol[(Math.floor(Math.random()*16))];
    }
    box1.style.backgroundColor=sym;
}
function colorGenerator1(){
    let symbol=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let sym="#";
    for(let i=0; i<6; i++){

sym=sym+symbol[(Math.floor(Math.random()*16))];
    }
    box2.style.backgroundColor=sym;
}
box1.addEventListener("mousemove",colorGenerator);
box2.addEventListener("mousemove",colorGenerator1);

