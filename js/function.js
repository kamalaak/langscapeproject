let pallu = document.getElementById('cringekamalesh');

function buttontoggel(){
    if (pallu.classList.contains('hidden')) {
        pallu.classList.remove('hidden')
    }else{
        pallu.classList.add('hidden')
    }
}


// slide part 
let slider = document.getElementsByClassName('slide-content');
dots= document.getElementsByClassName('dots');
sl = 1;

function right(n){

    show(sl +=n)

};





show(sl)


function bu(n){
    show(sl = n);
}

function show (n){
    let i;
    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.add('hidden');
        
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.add('bg-gray-800')
        
    }
    if (n>slider.length) {
        sl=1;
    }
    if (n<1) {
        sl = slider.length;
    }
   slider[sl-1].classList.remove('hidden')
   dots[sl-1].classList.remove('bg-gray-800')
}



// slide end here 



// contact validation part starts here


let form = document.getElementById('form');
username = document.getElementById('name').value;
email = document.getElementById('email').value;
message = document.getElementById('message').value;



function validate(){
    if (username.trim()  === '') {
       
        alert('Enter your name  ')
        return false;
    }
    if (email.trim()  === '') {
        alert('Enter email id ')
        
        return false;
    }if (message.trim() === '') {
        alert('enter your message ')
        return false;
    }else{
        alert('thanks for your time ')
        return true;
    }
}






// contact validation part ends here 




// slidedad

let dad = document.getElementById('sliderdad');

let child = document.getElementById('silderchild');

let cards = child.getElementsByTagName('li');


let dadwidth = dad.clientWidth;



let cartstoshow = 3;

if (document.body.clientWidth<500) {
    cartstoshow = 1;
}else if (document.body.clientWidth <1000){
    cartstoshow = 3;
}


let cardswidth = dadwidth/cartstoshow;


 child.style.width = cards.length*cardswidth+'px';
 child.style.transition = "margin";
 child.style.transitionDuration = "1s";

 for (let index = 0; index < cards.length; index++) {
    const element = cards[index];

    element.style.width = cardswidth+'px';
    
 }

function pre(){
   
    if (+cardswidth*(cards.length-cartstoshow) !== -child.style.marginLeft.slice(0,-2) ) {
        child.style.marginLeft =  ((+child.style.marginLeft.slice(0,-2))-cardswidth)+'px';
    }
    
}

function next(){
    if (+child.style.marginLeft.slice(0,-2) !== 0) {
        child.style.marginLeft =  ((+child.style.marginLeft.slice(0,-2))+cardswidth)+'px';
    }
    
}
function autoplay(){
    pre();
    if (+cardswidth*(cards.length-cartstoshow) === -child.style.marginLeft.slice(0,-2) ){

      child.style.marginLeft = "0px";

    }
    setTimeout(() => {
        autoplay()
    }, 5000);



  
}


setTimeout(() => {
    autoplay()
}, 3000);



// slide dad end here 