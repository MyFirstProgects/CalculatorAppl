let tmp = "";
let number1 = "";
let number2 = "";
let operand = "";
let display = document.querySelector(".display");
let num1 = document.getElementById("1");
let num2 = document.getElementById("2");
let num3 = document.getElementById("3");
let num4 = document.getElementById("4");
let num5 = document.getElementById("5");
let num6 = document.getElementById("6");
let num7 = document.getElementById("7");
let num8 = document.getElementById("8");
let num9 = document.getElementById("9");
let num0 = document.getElementById("0");
let op1 = document.getElementById("division");
let op2 = document.getElementById("multiplication");
let op3 = document.getElementById("subtract");
let op4 = document.getElementById("addition");
let op5 = document.getElementById("result");
let op6 = document.getElementById("AC");



op5.onclick = () => {
    number2 = parseInt(tmp);
    tmp = "";
    if(number1 != null && number2 != null && operand != null){
        switch(operand){
            case "divide": if(number2 == 0) {
                display.innerHTML = "ERROR! DIVISION BY ZERO"; break;
            } else {
                display.innerHTML = number1 /= number2; break;
            } 
            case "multiplicate": display.innerHTML = number1 *= number2; break;
            case "subtract": display.innerHTML = number1 -= number2; break;
            case "add": display.innerHTML = number1 += number2; break;
            //case "": display.innerHTML = number1 number2; break;
            default: display.innerHTML = "UNKNOWN ERROR";
        }
    } else {
        display.innerHTML = "UNKNOWN ERROR";
    }
}


















op1.onclick = () => {
    number1 = parseInt(tmp);
    tmp = "";
    operand = "divide";
    display.innerHTML = "/";
}
op2.onclick = () => {
    number1 = parseInt(tmp);
    tmp = "";
    operand = "multiplicate";
    display.innerHTML = "*";
}
op3.onclick = () => {
    number1 = parseInt(tmp);
    tmp = "";
    operand = "subtract";
    display.innerHTML = "-";
}
op4.onclick = () => {
    if(number1 != null){
    
    }
    number1 = parseInt(tmp);
    tmp = "";
    operand = "add";
    display.innerHTML = "+";
}
op6.onclick = () => {
    number1 = "";
    number2 = "";
    operand = "";
    tmp = "";
    display.innerHTML = "Display";
}
num1.onclick = () => {
   tmp += "1";
   console.log(tmp);
   display.innerHTML = tmp;
}
num2.onclick = () => {
    tmp += "2";
    console.log(tmp);
    display.innerHTML = tmp;
 }
 num3.onclick = () => {
    tmp += "3";
    console.log(tmp);
    display.innerHTML = tmp;
 }
 num4.onclick = () => {
    tmp += "4";
    console.log(tmp);
    display.innerHTML = tmp;
 }
 num5.onclick = () => {
    tmp += "5";
    console.log(tmp);
    display.innerHTML = tmp;
 }
 num6.onclick = () => {
    tmp += "6";
    console.log(tmp);
    display.innerHTML = tmp;
 }
 num7.onclick = () => {
    tmp += "7";
    console.log(tmp);
    display.innerHTML = tmp;
 }
 num8.onclick = () => {
    tmp += "8";
    console.log(tmp);
    display.innerHTML = tmp;
 }
 num9.onclick = () => {
    tmp += "9";
    console.log(tmp);
    display.innerHTML = tmp;
 }
 num0.onclick = () => {
    tmp += "0";
    console.log(tmp);
    display.innerHTML = tmp;
 }

