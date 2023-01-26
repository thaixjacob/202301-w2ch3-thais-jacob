const bingoCard = [];

line1 = [];
line2 = [];
line3 = [];

let round = 0;

let calledNumbers = [];

let checkBingo = [];

const askForUserNameAndGreet = () => {
  //bienvenida
  const userName = prompt("Welcome to Bingo! Please, enter your name.");
  if (!userName) {
    alert("I'm sure you have a beautiful name. Please enter your name.");
    askForUserNameAndGreet();
  } else {
    console.log(`Hello ${userName}!`);
    alert(`Hi ${userName}! Take a look in your card.`);
  }
};

const randomNumbersCard = () => {
  //crea numeros randoms
  let randomNumber = Math.ceil(Math.random() * 99) + 1;
  return randomNumber;
};

const createCard = () => {
  //crea el carton
  while (bingoCard.length < 15) {
    const bingoCardNumbers = {
      number: randomNumbersCard(),
      matched: false,
    };
    if (calledNumbers.includes(bingoCardNumbers.number)) {
      randomNumbersCard();
    } else {
      calledNumbers.push(bingoCardNumbers.number);
      bingoCard.push(bingoCardNumbers);
    }
  }
  return showAndConfirmCard();
};

const showAndConfirmCard = () => {
  //enseña y pregunta al usuario si desea el carton
  console.log("Your numbers are:");
  console.table(bingoCard);
  console.log("**************");

  let confirmCard = confirm(
    "Do you want change your card?\n\nACCEPT, if yes\nCANCEL, to start the game\n"
  );
  if (confirmCard === true) {
    deleteCard();
    createCard();
  } else {
    line1 = bingoCard.slice(0, 5);
    line2 = bingoCard.slice(5, 10);
    line3 = bingoCard.slice(10, 15);
    alert("Perfect! Let's go to the first number.\nMay the luck be with you!");
  }
};

const callNumber = () => {
  //llama a un numero aleatorio
  let newNumber = Math.ceil(Math.random() * 99) + 1;
  while (calledNumbers.includes(newNumber) || newNumber === 0) {
    newNumber = Math.ceil(Math.random() * 99) + 1;
  }
  calledNumbers.push(newNumber);
  round++;
  return newNumber;
};

Array.prototype.indexOfNumber = function (number) {
  for (var i = 0; i < this.length; i++) if (this[i].number === number) return i;
  return -1;
};

const cleanCalledNumbers = () => (calledNumbers = []);

const checkNumberCard = () => {
  //verifica si el numero coincide con el carton
  const bingoNumber = callNumber();
  for (let i = 0; i < bingoCard.length; i++) {
    let index = bingoCard.indexOfNumber(bingoNumber);
    if (index !== -1) {
      bingoCard[index].matched = true;
      bingoCard[index].number = "X";
      alert(
        `The number is: ${bingoNumber}...\nWait... WOW! You have this number!`
      );
      console.log(`The number ${bingoNumber} has been found!`);
      checkBingo.push(bingoNumber);
      showCard();
      return checkNumberCard();
    } else {
      alert(`The number is: ${calledNumbers.slice(-1)}`);
      return checkNumberCard();
    }
  }
};

const showCard = () => {
  //enseña el carton
  console.table(bingoCard);
};

const nextTurn = () => confirm("Keep playing?");

const deleteCard = () => {
  //borrar carton
  calledNumbers.length = 0;
  bingoCard.length = 0;
};

const playBingo = () => {
  askForUserNameAndGreet();
  createCard();
  cleanCalledNumbers();

  do {
    checkNumberCard();
    if (checkBingo.length === 15) {
      console.log("BINGO!!!!");
      break;
    }
  } while (nextTurn());
  alert(
    `You finished the game in ${round} rounds.\nIt was great to play with you! See you next time, ${userName}.`
  );
};

playBingo(); //numeros repetidos nos bombo, nao ta fazendo bingo
