const questions = [
    {
      letter: "a",
      answer: "abducir",
      status: 0,
      question:
        "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
    },
    {
      letter: "b",
      answer: "bingo",
      status: 0,
      question:
        "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    },
    {
      letter: "c",
      answer: "churumbel",
      status: 0,
      question: "CON LA C. Niño, crío, bebé",
    },
    {
      letter: "d",
      answer: "diarrea",
      status: 0,
      question:
        "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
    },
    {
      letter: "e",
      answer: "ectoplasma",
      status: 0,
      question:
        "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
    },
    {
      letter: "f",
      answer: "facil",
      status: 0,
      question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
    },
    {
      letter: "g",
      answer: "galaxia",
      status: 0,
      question:
        "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
    },
    {
      letter: "h",
      answer: "harakiri",
      status: 0,
      question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
    },
    {
      letter: "i",
      answer: "iglesia",
      status: 0,
      question: "CON LA I. Templo cristiano",
    },
    {
      letter: "j",
      answer: "jabali",
      status: 0,
      question:
        "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    },
    {
      letter: "k",
      answer: "kamikaze",
      status: 0,
      question:
        "CON LA K. Persona que se juega la vida realizando una acción temeraria",
    },
    {
      letter: "l",
      answer: "licantropo",
      status: 0,
      question: "CON LA L. Hombre lobo",
    },
    {
      letter: "m",
      answer: "misantropo",
      status: 0,
      question:
        "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    },
    {
      letter: "n",
      answer: "necedad",
      status: 0,
      question: "CON LA N. Demostración de poca inteligencia",
    },
    {
      letter: "ñ",
      answer: "señal",
      status: 0,
      question:
        "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
    },
    {
      letter: "o",
      answer: "orco",
      status: 0,
      question:
        "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    },
    {
      letter: "p",
      answer: "protoss",
      status: 0,
      question:
        "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
    },
    {
      letter: "q",
      answer: "queso",
      status: 0,
      question:
        "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
    },
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
    {
      letter: "s",
      answer: "stackoverflow",
      status: 0,
      question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
    },
    {
      letter: "t",
      answer: "terminator",
      status: 0,
      question:
        "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
    },
    {
      letter: "u",
      answer: "unamuno",
      status: 0,
      question:
        "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },
    {
      letter: "v",
      answer: "vikingos",
      status: 0,
      question:
        "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    },
    {
      letter: "w",
      answer: "sandwich",
      status: 0,
      question:
        "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
    },
    {
      letter: "x",
      answer: "botox",
      status: 0,
      question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
    },
    {
      letter: "y",
      answer: "peyote",
      status: 0,
      question:
        "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
    },
    {
      letter: "z",
      answer: "zen",
      status: 0,
      question:
        "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
    },
]

let players = [];

players = []

let namesPlayers = []

class Player {
  userName;
  rightAnswer;

  constructor(userName, rightAnswer) {
    this.userName =  userName
    this.rightAnswer = rightAnswer
  }
}


const askForNameAndGreetUser1 = () => {
  const userName1 = prompt(
    "¡Bienvenido a Pasapalabras, jugador! Por favor, introduce tu nombre."
  );

  if (!userName1) {
    askForNameAndGreetUser1()
  } else {
    namesPlayers.push(userName1)

    console.log(`Bienvenido ${userName1}`
    )
    alert(`¡Holla ${userName1}!\n\nTe haremos una pregunta por cada letra del abecedario y ganarás un punto por cada respuesta correcta.\n\nAl final del juego, te haremos saber cuántas letras has acertado y cuántas no. Gana el jugador que tenga más puntos.`
    )
    alert(`Notas:\n\n￫ Si no lo sabes, puedes pasar a la siguiente pregunta respondiendo "pasapalabra".\n\n￫ También puedes abandonar el juego en cualquier momento simplemente respondiendo "end".\n\n¡Suerte!`
    )
    console.log("Intenta adivinar las respuestas correctas a las preguntas. ¡Comencemos!"
    )
  }
}

const askForNameAndGreetUser2 = () => {
  const userName2 = prompt(
    "¡Bienvenido a Pasapalabras, jugador! Por favor, introduce tu nombre."
  );
  if (!userName2) {
    askForNameAndGreetUser2()
  } else {
    namesPlayers.push(userName2)

    console.log(`Bienvenido ${userName2}`
    )
    alert(`¡Holla ${userName2}!\n\nLas reglas para ti son las mismas que para el jugador anterior. Intenta responder correctamente a las preguntas para asegurarte la victoria.\n\n¡Suerte!`
    )
    console.log("Acuérdate de adivinar las respuestas correctas a las preguntas. ¡Comencemos!"
    )
  }
}

const askQuestion = () => {

  for (let i = 0; i < questions.length; i++) {
      
    let answer = prompt(questions[i].question);
  
    if (answer.toLowerCase() === questions[i].answer.toLowerCase()) {
      alert("¡Respuesta correcta!\n\nHas ganado 1 punto.")
      console.log(`Has acertado la respuesta a la letra ${questions[i].letter}. ¡Buen trabajo!`)
      questions[i].status = 1
    }
  
    else if (answer === null || answer.toLowerCase() === "end".toLowerCase()) {
      let askForEnd = confirm("¿Seguro que quieres abandonar el juego?")
  
      if (askForEnd === true){
        alert(`Has acertado ${score} preguntas. ¡Hasta la próxima!`)
      } else {
        alert("Intentémoslo de nuevo")
        i--
      }
    }
  
    else if (answer === " "){
      alert("0 puntos.\n\nRespuesta no válida. ¡Próxima pregunta!")
      questions[i].status = 2
    }
  
    else if (answer.toLowerCase() === "pasapalabra".toLowerCase() || answer.toLowerCase() === "pasapalabras".toLowerCase()) {
      alert("Volveremos a ello al final del partido. ¡Próxima pregunta!")
      questions[i].status = 3
    }
  
    else {
      alert("0 puntos.\n\nRespuesta incorrecta. ¡Próxima pregunta!")
      questions[i].status = 2
    }
  }
  unansweredQuestions()
}

const unansweredQuestions = () => {
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].status === 3) {
      alert(`Ahora vamos con las preguntas que has contestado "pasapalabra".`)

      const askAgain = prompt(questions[i].question);

      if (askAgain.toLowerCase() === questions[i].answer.toLowerCase()) {
        alert("¡Respuesta correcta!\n\nHas ganado 1 punto.")
        console.log(`Has acertado la respuesta a la letra ${questions[i].letter}. ¡Buen trabajo!`)
        questions[i].status = 1
      }

      else if (askAgain === null || askAgain.toLowerCase() === "end".toLowerCase()) {
        let askForEnd = confirm("¿Seguro que quieres abandonar el juego?")
    
        if (askForEnd === true){
          alert(`Has acertado ${score} preguntas. ¡Hasta la próxima!`)
        } else {
          alert("Intentémoslo de nuevo")
          i--
        }
      }
      
      else if (askAgain === " "){
        alert("0 puntos.\n\nRespuesta no válida.")
        questions[i].status = 2
      }

      else if (askAgain.toLowerCase() === "pasapalabra".toLowerCase() || askAgain.toLowerCase() === "pasapalabras".toLowerCase()) {
        alert("No es posible volver a pasar esa palabra. Piénsatelo bien y responde con cuidado.")
        i--
      }

      else {
        alert("0 puntos.\n\nRespuesta incorrecta.")
        questions[i].status = 2
      }

    }
  }
}

const rightAnswers = () => {
  return questions.filter((question) => question.status === 1).length;
}

const wrongAnswers = () => {
  return questions.filter((question) => question.status === 2).length;
}

const cleanStatusForTheNextPlayer = () => {
  questions.forEach(item => {
    item.status = 0;
  });
}

const showResults = () => {

  alert(`Buen trabajo, jugador.\n\nHas acertado ${rightAnswers()} respuestas y te has equivocado ${wrongAnswers()}.`
  )
  console.log(`Respuestas correctas:${rightAnswers()} - Respuestas incorrectas: ${wrongAnswers()}`
  )
}

const endGame = () => {

  alert("Habéis trabajado duro, pero sólo uno puede ser el ganador.\n\nY el ganador es... 🥁🥁🥁")

  if (players[0].rightAnswer > players[1].rightAnswer) {
    alert(`¡${players[0].userName} ha ganado el partido con ${players[0].rightAnswer} puntos!\n\nSu oponente ha obtenido ${players[1].rightAnswer} puntos.`);

  } else if (players[1].rightAnswer > players[0].rightAnswer) {
    alert(`¡${players[1].userName} ha ganado el partido con ${players[1].rightAnswer} puntos!\n\nSu oponente ha obtenido ${players[0].rightAnswer} puntos.`);

  } else {
    alert("¡Es un empate!");
  }
  askToPlay = confirm("¿Te gustaría volver a jugar a Pasapalabras?")

  if (askToPlay === true){
    alert("Me encanta tu espíritu como jugador. ¡Vamos otra vez!")
    pasapalabras()
  }
  else {
    alert("Me ha encantado jugar contigo. ¡Hasta la próxima, jugador!")
  }
}


const pasapalabras = () => {
  askForNameAndGreetUser1()
  askQuestion()
  showResults()
  players.push(new Player(namesPlayers[0], rightAnswers()))

  cleanStatusForTheNextPlayer()
  
  askForNameAndGreetUser2()
  askQuestion()
  showResults()
  players.push(new Player(namesPlayers[1], rightAnswers()))

  cleanStatusForTheNextPlayer()

  endGame()
}
  
pasapalabras()

