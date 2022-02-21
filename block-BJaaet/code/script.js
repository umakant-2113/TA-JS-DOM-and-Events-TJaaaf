let input=document.querySelector(`input`);
let form = document.querySelector('form')
let ul  = document.querySelector('ul')
function errase(event){
   event.target.parentElement.remove()
}
 
form.addEventListener('submit',(e)=>{
    e.preventDefault();
let  value = e.target.elements.text.value
if(value!==``){
let li=document.createElement(`li`);

var x = document.createElement("INPUT");
x.setAttribute("type", "checkbox");
let span2=document.createElement(`span`);

span2.classList.add(`span2`)
span2.innerText='❌';


span2.addEventListener("click",errase)
x.classList.add(`check`);

let span=document.createElement(`span`);

span.innerText=value;
li.append(x,span,span2);

ul.append(li);
}
e.target.elements.text.value=``
})

