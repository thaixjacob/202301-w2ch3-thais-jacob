const buttons = document.querySelectorAll(".buttons-container button"); 
const currentOperation = document.querySelector(".current-operation"); 
currentOperation.textContent = "0";

buttons.forEach(button => button.addEventListener("click", clickedButton)); //detector de eventos de clic, llama clickedButton a cada clic

let currentValue = ""; 
let previousValue = ""; 
let operation = ""; 

function clickedButton (event) {
    const button = event.target; //event.target = propiedad para obtener el botón en el que se hizo clic
    const buttonValue = button.textContent; 
  
    //Botones numéricos
    if (button.classList.contains("number")) {
      if (buttonValue === ".") {
          if (currentValue.indexOf(".") === -1) {
              currentValue += buttonValue;
          }
      } else {
          currentValue += buttonValue; //concatena
      }
      currentOperation.textContent = currentValue; //actualiza el currentOperation para mostrar el valor actual
    }
  
    //Botones operadores
    if (buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/" || buttonValue === "%") {
        operation = buttonValue;
        currentOperation.textContent = operation;
        previousValue = currentValue; //actualiza previousValue
        currentValue = ""; //borra la currentValue
    }
  
    //Botón equal
    if (button.classList.contains("equal-btn")) {
        let result;
  
        //Realizar la operación
        switch (operation) {
            case "+":
                result = parseFloat(previousValue) + parseFloat(currentValue);
                break;
            case "-":
                result = parseFloat(previousValue) - parseFloat(currentValue);
                break;
            case "*":
                result = parseFloat(previousValue) * parseFloat(currentValue);
                break;
            case "/":
                result = parseFloat(previousValue) / parseFloat(currentValue);
                break;
            case "%":
                result = (parseFloat(previousValue) * parseFloat(currentValue)) / 100;
                break;
        }
  
        //Mostrar el resultado y borrar los valores
        currentOperation.textContent = result;
        previousValue = "";
        currentValue = "";
    }
  
    //Botón AC
    if (button.classList.contains("AC-btn")) {
        previousValue = "";
        currentValue = "";
        currentOperation.textContent = "0";
    }
}