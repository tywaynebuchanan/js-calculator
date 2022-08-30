'use strict'

const btn = document.querySelectorAll("button");
const screen = document.getElementById("inputtext")
const result = document.getElementById("result");
const clear = document.getElementById("clear");

//Function to get the data from the user
function calculator(e){
    screen.value+=e.target.value;
}

//Function to calculate values
function Calculation(){
    try{
        screen.value = eval(screen.value);
    }catch(err){
        screen.value = "Error";
    }
}

btn.forEach(button=>{
    button.addEventListener("click",calculator)
})
//Event to clear the screen 
clear.addEventListener("click",()=>{
    screen.value = "";
})


//Event to calculate
result.addEventListener("click",Calculation)