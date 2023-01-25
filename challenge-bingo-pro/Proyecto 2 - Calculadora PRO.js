let numbersToCalculate = [];

function calculatorPro(numbers) {
  function firstNumber(x) {
    //to get the first number
    if (Number.isNaN(x)) {
      window.alert(`Oops, we need a numerical value. Try again.`);
      x = window.prompt(`Please, type in a number:`);
      return;
    }
    numbers.push(x);
    let askForSquareRoot = confirm(
      "Do you want to calculate a square root of " + x + "?"
    );

    if (askForSquareRoot === true) {
      let square = Math.sqrt(x).toFixed(3);
      alert("The square root of " + x + " is " + square);
    }
    return console.log(numbers);
  }

  function secondNumber(y) {
    //to get the second number
    if (Number.isNaN(y)) {
      window.alert(`Oops, we need a numerical value. Try again.`);
      y = window.prompt(`Please, type in a number:`);
      return;
    }
    numbers.push(y);
    return console.log(numbers);
  }

  function askForMoreNumbers() {
    //to get more numbers
    let answer = true;
    while (answer === true) {
      let n3 = window.confirm(`Would you like to add another number?`);
      if (n3 === true) {
        let anotherNumber = Number(window.prompt(`Please, type in a number:`));
        while (Number.isNaN(anotherNumber)) {
          window.alert(`Oops, we need a numerical value. Try again.`);
          anotherNumber = Number(window.prompt(`Please, type in a number:`));
        }
        numbers.push(anotherNumber);
      } else {
        answer = false;
        return calculator(numbers);
      }
    }
  }

  function calculator(value) {
    //to calculate

    let sum = 0;
    let subtraction = 0;
    let multiplication = 1;
    let division = 0;

    for (let i = 0; i < value.length; i++) {
      sum += value[i];
    }
    if (!Number.isInteger(sum)) {
      sum = sum.toFixed(3);
    }

    for (let i = 1; i < value.length; i++) {
      subtraction -= value[i];
      subtraction = value[0] + subtraction;
    }
    if (!Number.isInteger(subtraction)) {
      subtraction = subtraction.toFixed(3);
    }

    for (let i = 0; i < value.length; i++) {
      multiplication = multiplication * value[i];
    }
    if (!Number.isInteger(multiplication)) {
      multiplication = multiplication.toFixed(3);
    }

    for (let i = 1; i < value.length; i++) {
      division = value[0] /= value[i];
    }
    if (!Number.isInteger(division)) {
      division = division.toFixed(3);
    }

    let results = window.alert(
      `Here are your results: \n Sum: ${sum} \n Subtraction: ${subtraction} \n Multiplication: ${multiplication} \n Division: ${division}`
    );
    return results;
  }

  window.alert(`Hello, I'm your calculator! Let me help you with the math.`);

  var n1 = Number(
    window.prompt("Please, type in the FIRST number to get the results.")
  );
  firstNumber(n1);

  var n2 = Number(
    window.prompt("Now, type in the SECOND number to get the results.")
  );
  secondNumber(n2);

  askForMoreNumbers();

  askContinue();
}

function askContinue() {
  // to ask for more operations
  let ask = window.confirm(`Would you like to perform another operation?`);
  if (ask === true) {
    numbersToCalculate = [];
    calculatorPro(numbersToCalculate);
    return;
  }
  if (ask === false) {
    window.alert("See you soon!");
  }
}

calculatorPro(numbersToCalculate);
