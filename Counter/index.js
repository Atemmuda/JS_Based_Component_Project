// let number = Number(document.querySelector("#number").innerHTML);
// const increase = document.querySelector(".increase");
// const dercrease = document.querySelector(".decrease");
// const reset = document.querySelector(".reset");

// function changeValue(number) {
//   if (document.innerText === "INCREMENT") {
//       number += 1;
//   }else if(document.innerText === "DECREMENT"){
//       number -= 1;
//   }else{
//       number === 0;
//   }

//   document.getElementById("number").innerHTML = number;
// }

// increase.addEventListener('click', alert('increase clicked'));
// dercrease.addEventListener('click', alert('decrease clicked'));
// reset.addEventListener('click', alert('reset clicked'));

function increase() {
    const number = Number(document.getElementById("number").innerHTML);
    document.getElementById('number').innerHTML = number + 1;
}

function decrease() {
    const number = Number(document.getElementById("number").innerHTML);
    document.getElementById('number').innerHTML = number - 1;
}

function reset() {
    document.getElementById('number').innerHTML = 0;
}