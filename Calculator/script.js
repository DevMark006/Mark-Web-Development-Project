var display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";

}

function deleteNumber() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } 
    catch(error){
        display.value = "Error";

    }
}

function goDarkmode () {
   var element = document.body;
   element.classList.toggle("dark-mode");
}