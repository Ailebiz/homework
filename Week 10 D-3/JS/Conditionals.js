// let number = prompt("Сан енгізіңіз")
// let firstDigit = number // Бірінші санды табу
// let secondDigit = number // Екінші санды табу
// let number = Number(prompt("0-ден 99-ға дейінгі санды енгіз"))
// let i1  // Бірінші санды табу
// let i // Екінші санды табу
//     if (number >= 0 && number <= 99) {
//         // 0 мен 99 арасындағы сан екендігін тексеру
//     }  
//         if (number < 10) {
//             // Егер бір таңбалы сан болса
//             alert(number);
//         } else if(i1 =0, i1>0 && i<=99) {// Екі таңбалы сан болса 
//             alert(i)
//             alert(i1)
            
//         }
        // else{
//         //     alert("сен 0 мен 99 арасындағы санды енгізбедің")
//         //>;asx

//
// let number = Number(prompt("0-ден 99-ға дейінгі санды енгіз"))

// If (i =0, i>0 && i<=99){
//     alert(i)
// } 
// else{
//     alert("сен 0 мен 99 арасындағы санды енгізбедің")
// }

    let number = prompt("0 мен 99 аралығындағы санды енгізіңіз:");
    number = Number(number);

    if (number >= 0 && number <= 99) {
        if (number < 10) {
            alert("Сан: " + number);
        } else {
            let firstDigit = Math.floor(number / 10);
            let secondDigit = number % 10;

            alert("Бірінші сан: " + firstDigit);
            alert("Екінші сан: " + secondDigit);
        }
    } else {
        alert("Сан 0 мен 99 аралығында болу керек.");
    }
