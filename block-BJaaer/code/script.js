const form = document.querySelector('form');
const submitButton = document.querySelector('#submit');
const modalwrapper = document.querySelector('.modal-wrapper');
const dataModal = document.querySelector('.modal-container');
// to  hide the modal  when   the  button clicked 
const closeModal = document.querySelector('.close-btn');
// Hide the Modal so we can not see it while filling the form 

userInfo ={};


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    userInfo.name = form.elements.name.value;
    userInfo.email = form.elements.email.value;
    userInfo.entertainment = form.elements.entertainment.value;
    userInfo.color  = form.elements.color.value;
    userInfo.userRating  = form.elements.range.value;
    userInfo.consent = form.elements.terms.checked;
    userInfo.bookGenre  = form.elements.drone.value;

    //modal data    
    
    document.querySelector('.modalName').innerText =userInfo.name;
    document.querySelector('.modalEmail').innerText =userInfo.email;

    
    document.querySelector('.modalrating').innerText =userInfo.userRating;
    document.querySelector('.modalColor').innerText =userInfo.color;
    document.querySelector('.modalbookgenre').innerText =userInfo.bookGenre;
    
    let termsAndcondition =userInfo.consent== true ? 'accepted' : 'do not accepted'; 
    document.querySelector('.consent').innerText =termsAndcondition;
    let choice = userInfo.entertainment;
    document.querySelector('.modalChoices').innerText = choice;
});

//show modal 
submitButton.addEventListener('click',function(){
    modalwrapper.style.display="inline-block";
});

//hide  the modal when  the  close button clicked
closeModal.addEventListener('click',function(){
    modalwrapper.style.display='none';
})











