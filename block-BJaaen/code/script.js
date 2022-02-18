let container=document.querySelector(`.container`);
let a=document.querySelectorAll(`.common`);
let divBox=document.querySelector(`.box`);
let a2=document.querySelectorAll(`.computer`);
let p=document.querySelector(`p`);
let a3=document.querySelector(`.reload`);
let count = 0
let count2 = 0
function randomNumber(max){
    return Math.floor(Math.random()*max);
}

    for(let i=0;i<3;i++){
        let div=document.createElement(`div`);
        div.classList.add(`box1`);
        container.append(div);
    }
    a.forEach((ele,index)=>{
        ele.addEventListener(`click`,(e)=>{
let match=a2[randomNumber(3)].id;
console.log(index,match)
if(index==match){
p.innnerText="Its a tie";
}
else if(index==0&&match==2||index==1&&match==0||index==2&&match==1){
    count+=1
    let pointA=document.querySelector(`.span1`);
    pointA.innerText =  count
    console.log(count,`count`)
 p.innerText = 'Winner 👍'
}
else if(index==0&&match==1||index==1&&match==2||index==2&&match==0){
    count2+=1
    let pointB=document.querySelector(`.span2`);
pointB.innerText= count2
    console.log(count2,`count2`)
   p.innerText = 'You loose 🤦‍♀️'
}
        });
    })
for(let i=0;i<3;i++){
    let div2=document.createElement(`div`);
    div2.classList.add(`box3`);
    container.append(div2);
}
a3.addEventListener("click",(e)=>{
    location.reload();
} )

