'use strict'

const btn = document.querySelectorAll("button");
const screen = document.getElementById("inputtext")
const result = document.getElementById("result");
const clear = document.getElementById("clear");

//Function to get the data from the user
function calculator(e){
    screen.value+=e.target.value;
}

//Event to clear the screen 
clear.addEventListener("click",()=>{
    screen.value = "";
})
btn.forEach(button=>{
    button.addEventListener("click",calculator)
})

result.addEventListener("click",()=>{
    try{
        screen.value = eval(screen.value);
    }catch(err){
        screen.value = "Error";
    }
})