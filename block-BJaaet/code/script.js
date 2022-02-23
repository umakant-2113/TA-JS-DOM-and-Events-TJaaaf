// let input=document.querySelector(`input`);
// let form = document.querySelector('form')
// let ul  = document.querySelector('ul')
// function errase(event){
//    event.target.parentElement.remove()
// }
 
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     e.innerHTML="";
// let  value = e.target.elements.text.value
// if(value!==``){
// let li=document.createElement(`li`);

// var x = document.createElement("INPUT");
// x.setAttribute("type", "checkbox");
// x.innerText= x.value;
// let span2=document.createElement(`span`);

// span2.classList.add(`span2`)
// span2.innerText='❌';


// span2.addEventListener("click",errase)
// x.classList.add(`check`);

// let span=document.createElement(`span`);

// span.innerText=value;
// li.append(x,span,span2);

// ul.append(li);
// console.log(ul);
// }
// e.target.elements.text.value=``
// });


// second method


let input=document.querySelector(`.input-box`);
let root=document.querySelector(`ul`);
// console.log(input);
let allMovies=[
    // {name:"Forest gump",wahtched:false},
    // {name:"Forest",wahtched:false}
]



input.addEventListener(`keyup`,(event)=>{
    event.preventDefault();
if(event.keyCode===13){
allMovies.push({
    name:event.target.value,
    watched:false,
})
event.target.value="";
creatMovieUi();
}
})

function deleteMovie(){
    let id=event.target.dataset.id;
    allMovies.splice(id,1);
    creatMovieUi();
}
function handle(){
    let id=event.target.id;
    allMovies[id].watched=!allMovies[id].watched;
}


function creatMovieUi(){
    root.innerHTML="";
    allMovies.forEach((movie,i)=>{
        let li=document.createElement(`li`);
        let input=document.createElement(`input`);
        input.type="checkbox";
        input.id=i;
        input.addEventListener("change",handle)
        input.checked=movie.wahtched;
        input.classList.add(`style-checkbox`);

        
        let label=document.createElement(`label`);
        label.for=i;
        label.innerText=movie.name
        let span=document.createElement(`span`);
    span.innerText="X";
        span.setAttribute("data-id",i);
        span.addEventListener("click",deleteMovie)
        li.append(input,label,span)
        root.append(li);
        
        
    });
}
creatMovieUi();




