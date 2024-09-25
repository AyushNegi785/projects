const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        //Eval can be used to run arbritary code if used in such way and is a potential security hazard
        display.value = eval(display.value); 
    }
    catch(error){
        display.value = "Error";
    }
}