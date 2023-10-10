'use strict'

let option = document.querySelectorAll('.option');
const submit = document.querySelector("input[type='button']");
const rating = document.querySelector('#rating');
let selectedNumber = 0;

option.forEach((num) => {             
    
    num.addEventListener('click', (e) => {  
        option.forEach(el => el.classList.remove('active'));

        selectedNumber = num.textContent; // valor a imprimir   
        num.classList.add('active');         
    })      
     
})


function sendRating() {
    let stateStart = document.querySelector('.state-start');
    let stateEnd = document.querySelector('.state-end');    
    
    stateStart.style.display = 'none';
    stateEnd.style.display = 'flex';

    rating.textContent = selectedNumber;
}

submit.addEventListener('click', sendRating);
