const button = document.querySelectorAll('.button');
const reset = document.querySelector('.reset');
const equal = document.querySelector('.equal');
const display = document.querySelector('.display');
const deletee = document.querySelector('.delete');
const operands = document.querySelectorAll('.operation');
let result="",operation,current;

reset.addEventListener('click',()=>{
    display.textContent="";
    result="";
});

button.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        result = result + btn.value;
        display.textContent=result;
    })
});

function calc(){
    result = eval(result);
    display.textContent=result;
}

deletee.addEventListener('click',()=>{
    result = result.toString().slice(0, -1);
    display.textContent=result;
});

equal.addEventListener('click',()=>{
    calc();
    display.innerHTML=result;
})
