let namebox=document.querySelector(`.allname`);
let alldata=document.querySelector(`.alldata`);
let input=document.querySelector(`#text`);


function createUi(char){
    let div=document.createElement(`div`);
     div.classList.add(`flex-30`);
    let img=document.createElement(`img`);
    img.src=char.image;
    let h2=document.createElement(`h2`);
    h2.innerText=char.name;
    let p=document.createElement(`p`);
    p.innerText=char.description;
    let btn=document.createElement(`a`);
    btn.href=char.wikiLink;
    btn.style.textDecoration="none";
    btn.innerText="KNOW MORE"
    div.append(img,h2,p,btn);
    alldata.append(div);
}


function  handleInitialUi(){
got.houses.forEach(house=>{
      house.people.forEach(person=>{
          createUi(person);
      })
  });
}



function  handleHouse(e){
        got.houses.forEach(house=>{
            if(house.name.toLowerCase() === e.target.innerText.toLowerCase()){
                console.log(e.target.innerHTML, house.name );
                alldata.innerHTML=``;
                house.people.forEach(person=>{
                    console.log(person);
                      createUi(person);
                })
            }
            
  });
}


got.houses.forEach((element)=>{
    let div=document.createElement(`div`)
    div.innerText=element.name;
    div.classList.add(`name`);
    div.addEventListener('click', (e)=>handleHouse(e))
    namebox.append(div)
    
});

function handleKey(event){
    alldata.innerHTML=``;
    if(event.keyCode===13){
        console.log(event.target.value)
        got.houses.forEach((element)=>{  
    let peopleObj=element.people.filter(elm=> elm.name.toLowerCase().includes(event.target.value.toLowerCase()))

    peopleObj.forEach(elm=>createUi(elm))

        })
    }
    
}

handleInitialUi();

input.addEventListener(`keyup`,handleKey);

