let input=document.querySelector(`#text`);
let root=document.querySelector(`ul`);
let btn=document.querySelector(`.complete`);
let act=document.querySelector(`.active`);



// console.log(btn);

function clear(event){
    location.reload();
}
btn.addEventListener(`click`,clear)

let allTodos=[];
function handleInput(){
    let value=event.target.value;
    if(event.keyCode===13 &&  value!==""){
    let todo={
        name:value,
        isDone:false
    }
    allTodos.push(todo);
    event.target.value="";
    creatUi();
}

}
function handleDelete(event){
 let id=event.target.dataset.id; 
 allTodos.splice(id,1); 
 creatUi();
}
function handleToggle(event, text){
    let id=event.target.dataset.id;
    allTodos[id].isDone= !allTodos[id].isDone
    if(allTodos[id].isDone===true){
      console.log(allTodos[id].name);
      text.classList.add('cancle');
    }
    else{
        text.classList.remove('cancle');
    }
}

input.addEventListener(`keyup`,handleInput);
function creatUi(){
    root.innerHTML="";
    allTodos.forEach((todo,index)=>{
    let li=document.createElement(`li`);
    li.classList.add(`box`)
    let input=document.createElement(`input`);
    input .type="checkbox";
    input.setAttribute("data-id",index);
    input.checked=todo.isDone
    let p=document.createElement(`p`);
    p.innerText=todo.name
    p.setAttribute("data-id",index);
    input.addEventListener(`input`,function(){
        handleToggle(event,p)
    });
    let span=document.createElement(`span`);
    span.innerText="❌";
    span.setAttribute("data-id",index)
    span.addEventListener(`click`,handleDelete)
    li.append(input,p,span);
root.append(li);
});
}
creatUi();
