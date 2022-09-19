'use strict';

const  btn = document.querySelector('#btn')
let  pos = 0;
let timerId
// let i=0
// btn.addEventListener('click', ()=>{
//     timerId = setInterval(logger, 500)
// })

// function logger(){
//     if(i<=5){
//         console.log(`${i} number`)
//         clearInterval(timerId)
//         i++
//     }
// }

// let Id = setTimeout(function log() {
//     console.log('hello log');
//     Id = setTimeout(log , 50);
// }, 5000);

function myAnimation(){
  
    const car = document.querySelector('.car');
    const timerId = setInterval(frame, 1);

}


 
function frame(){
    if(pos===700){
        clearInterval(timerId);
    }else{
        pos++
        car.style.left = pos+ ' px'
    }
}
btn.addEventListener('click',myAnimation)

