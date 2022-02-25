let box=document.querySelector(`.data-box`);


    books.forEach((element)=>{
let div=document.createElement(`div`);
div.classList.add(`flex`)
let h2=document.createElement(`h2`);
h2.innerText=element.title;
let img=document.createElement(`img`);
img.src=element.image;

let p= document.createElement(`p`)
p.innerText=element.publisher;
let a=document.createElement(`a`);
a.href=element.website;
a.innerText="KNOW MORE";
a.style.textDecoration="none";
div.append(img,h2,p ,a);
box.append(div);

});
