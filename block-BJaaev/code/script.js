function main(){
    let rootEle = document.querySelector('ul');
    let userInput= document.querySelector('.userinput');
    let active = document.querySelector('.active-todo');
    let all = document.querySelector('.all-todo');
    let completed = document.querySelector('.completed-todo');
    let clear = document.querySelector('.clear-completed');
    let activeButton = "all";
    let alltodos = JSON.parse(localStorage.getItem('todos')) || [];
    
    function deleteTodo(e , parentEle){
        console.dir(e.target)
        let id  = parentEle.dataset.id ;
        alltodos.splice(id , 1);
        localStorage.setItem(
            'todos',
            JSON.stringify(alltodos)
        );
       return createUi();
    }
    
    function updateIsDone(e, todoText){
        let id =e.target.dataset.id;
        alltodos[id].isDone = !alltodos[id].isDone;
        localStorage.setItem(
            'todos',
            JSON.stringify(alltodos)
        );
        if(alltodos[id].isDone === true){
            todoText.classList.add('line-through');
        }
        else{
            todoText.classList.remove('line-through')
        }
    };
    
    function createUi(data =alltodos){
        rootEle.innerText = "";
        data.forEach((todo , index)=>{
            // Creating the structure for the  user todo 
            let li = document.createElement('li');
            let input = document.createElement('input');
            input.type = "checkbox";
            let p= document.createElement('p');
            p.innerText = todo.name;
            let span = document.createElement('span');
            span.innerHTML = ` <i class="fas fa-window-close close-btn"></i>`;
            input.setAttribute("data-id" ,index);
            span.setAttribute("data-id" , index);
            // Onclick the btn todo gets delete 
            span.addEventListener("click",function(){
                deleteTodo( event ,span);
            });
    
            // input checkbox gets checked when  the user dynamically 
            // click the  checkbox and it also  get updated in the array 
            input.addEventListener("change",function(){
                updateIsDone(event, p )
            });
            li.append( input,p,span );
            rootEle.append(li);
    
        })
        return rootEle;
    };
    // all todos 
    all.addEventListener('click',()=>{
        activeButton = "all";
        updateBtn();
        createUi();
    });
    
    // Active  todos  Ends here 
    active.addEventListener('click',()=>{
        let activeTodos = alltodos.filter((todo)=> !todo.isDone);
        activeButton = "active";
        updateBtn();
        createUi(activeTodos);
    });
    
    // Active  todos  Ends here 
    completed.addEventListener('click',()=>{
         let completedTodos  = alltodos.filter((todo)=> todo.isDone);
        activeButton = "completed";
        updateBtn();
        createUi( completedTodos );
    });
    // clear completed 
    clear.addEventListener('click',()=>{
        addtodos  = alltodos.filter((todo)=> !todo.isDone);
        activeButton = "clear";
        updateBtn();
        createUi();
    });
    
    //active button 
    function updateBtn(){
        all.classList.remove("selected");
        active.classList.remove("selected");
        completed.active.classList.remove("selected");
        if(btn === "all"){
            all.classList.add("selected");
        }
       if(btn === "active"){
            active.classList.add("selected");
        }
       if(btn === "completed"){
            completed.active.classList.add("selected");
        }
    }
    function handleEvent(event){
        let value = event.target.value;
        if(event.keyCode === 13 && event.target.value!==""){
            alltodos.push(
                {
                    name: value,
                    isDone :false
                }
            );
            event.target.value= "";
            createUi();
        }
    
        localStorage.setItem(
        'todos',
        JSON.stringify(alltodos)
        );
    }
    createUi();
    userInput.addEventListener('keyup',handleEvent);
    
    };
    
    main();