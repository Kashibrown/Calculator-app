let num1 = document.getElementById("num1").textContent = 5;
let num2 = document.getElementById("num2").textContent = 5;
let total = document.getElementById("total")


function add(){
    num1 += num2
    total.textContent += num1
    total.textContent += ","
}

function minus(){
    num1 -= num2
    total.textContent += num1
    total.textContent += ","
}

function divide(){
    num1 /= num2
    total.textContent += num1
    total.textContent += ","
}

function multiply(){
    num1 *= num2
    total.textContent += num1
    total.textContent += ","
}

