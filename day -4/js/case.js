
let num1 = parseInt(prompt("Бірінші санды енгізіңіз:"));
let num2 = parseInt(prompt("Екінші санды енгізіңіз:"));
let num3 = parseInt(prompt("Үшінші санды енгізіңіз:"));

let maxNumber;


switch (true) {
    case (num1 >= num2 && num1 >= num3):
        maxNumber = num1;
        break;
    case (num2 >= num1 && num2 >= num3):
        maxNumber = num2;
        break;
    case (num3 >= num1 && num3 >= num2):
        maxNumber = num3;
        break;
}


console.log("Ең үлкен сан: " + maxNumber);