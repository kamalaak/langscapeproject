let pallu = document.getElementById('cringekamalesh');

function buttontoggel(){
    if (pallu.classList.contains('hidden')) {
        pallu.classList.remove('hidden')
    }else{
        pallu.classList.add('hidden')
    }
}


// slide part 
let slide = document.getElementById('slide');
let totalslides =slide.childElementCount;
console.log(totalslides);
let currentvalue = 1;






function right(){
if (currentvalue<totalslides) {
    currentvalue++;
    show()
}
};



function left(){
    if (currentvalue>1) {
        currentvalue--;
        show()
    }
    };

    function show (){
        total = document.getElementById('slide').getElementsByTagName('ul');
        for (let index = 0; index <totalslides; index++) {
            const element = total[index];
            if (currentvalue === index+1) {
                element.classList.remove('hidden')
                
            }else{
                element.classList.add('hidden')
            }
        }

    }
setInterval(right,5000);



// slide end here 