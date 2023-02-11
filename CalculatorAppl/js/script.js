let nums = document.querySelectorAll('.num');
let operations = document.querySelectorAll('.operator');
let display = document.querySelector('.display');
document.querySelector('.res').onclick =  calculateResalt;

document.querySelector('.ac').onclick = () => {
    number = 0;
    tmp = '';
    operation = '';
    display.innerHTML = 'DISPLAY';
}

let number = 0;
let tmp = '';
let operation = '';

for(let i = 0; i < nums.length; i++){
    nums[i].onclick = getNumber;
}
for(let i = 0; i < operations.length; i++){
    operations[i].onclick = () => {
        operation = operations[i].textContent;
        calculate();
    };
}
function getNumber(){
    tmp += this.textContent + '';
    console.log(tmp);
    display.innerHTML = tmp;
}
function calculate(){
    if(number == 0){
        number = parseFloat(tmp);
        tmp = '';
        return;
    } else {
        calculateResalt();
    }
}
function clean(){

}
function calculateResalt() {
    let num = parseFloat(tmp)
    switch(operation){
        case '+': number += num; break;
        case '-': number -= num; break;
        case '*': number *= num; break;
        case '/': if(num == 0){
            display.innerHTML = 'ERROR! DIVISION BY ZERO'; tmp = ''; number = 0; return;
        } else {
            number = number / num; break;
        }
        default: display.innerHTML = 'UNKNOWN ERROR'; tmp = ''; number = 0; return;
    }
    tmp = '';
    display.innerHTML = number;
}






