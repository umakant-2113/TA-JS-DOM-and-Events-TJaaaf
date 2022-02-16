let boxContainer = document.querySelector('.box-container');
let arr = [];
 for(let i=0;i<500 ; i++){
     arr.push(i);      
 };

 function randomNumber( max) {
    return Math.floor(Math.random() * (max));
  }

 arr.forEach((elem)=>{
    let box  = document.createElement('div');
    box.classList.add('box');
    boxContainer.append(box);
    let h3 = document.createElement('h3');
    h3.innerText=randomNumber(500);
    box.append(h3);
 });
 
function changeColor(){
    let allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(discobox=>{
        discobox.style.backgroundColor = colorGenerator();
        // box.firstElementChild.innerText = randomNumber();
        discobox.querySelector('h3').innerText =randomNumber(500);
    })
}
 

 function colorGenerator(){
    let hexCode = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
     let color='#';
     for(let i=0;i<6 ; i++){
        let random = Math.floor(Math.random()*16);
         color+= hexCode[random]
     }
     return color;
 };

document.querySelector('.box-container').addEventListener('mousemove', changeColor);