//1- Escribe una funcion en la que, declarando una map1ay con los numeros del 1 al 9, muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), además, cada elemento de la pareja deberá estar multiplicada por 2.

function showPairs() {
    const nums = [1,2,3,4,5,6,7,8,9]
    const map1 = nums.map(x => x * 2)
    for (let i = 0; i < map1.length - 1; i++) {
      console.log(map1[i] + "-" + map1[i + 1]);
    }
}
  
showPairs();

//1.1- La funcion debería aceptar la array a tratar como argumento.

const nums = [1,2,3,4,5,6,7,8,9]

function showPairs(array) {
   
    const map1 = array.map(x => x * 2)
    for (let i = 0; i < map1.length - 1; i++) {
      console.log(map1[i] + "-" + map1[i + 1]);
    }
}
  
showPairs(nums);

//1.2- Pasa también el numero a multiplicar a la función como argumento

const nums = [1,2,3,4,5,6,7,8,9]
const multiplierNumber = nums.at(-1); // para escolher o ultimo numero

function showPairs(array) {
   
    const map1 = array.map(x => x * multiplierNumber)
    console.log(`The multiplier number is ${multiplierNumber}`)
    for (let i = 0; i < map1.length - 1; i++) {
      console.log(map1[i] + "-" + map1[i + 1]);
    }
}
  
showPairs(nums);

//1.3- La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.

const nums = [1,2,3,4,5,6,7,8,9]
const multiplierNumber = nums.at(-1);
const pairs = []

function showPairs(array) {
   
    const map1 = array.map(x => x * multiplierNumber)

    console.log(`The multiplier number is ${multiplierNumber}`)

    for (let i = 0; i < map1.length - 1; i++) {
      pairs.push(map1[i] + "-" + map1[i + 1]);
    }

    pairsShow = pairs.slice(0, 3);
    
    console.log("The first 3 pairs are to be shown")
    console.log(pairsShow)

}
  
showPairs(nums);

//ou (para aparecer como lista)

const nums = [1,2,3,4,5,6,7,8,9]
const multiplierNumber = nums.at(-1);
const pairs = []

function showPairs(array) {
   
    const map1 = array.map(x => x * multiplierNumber)

    console.log(`The multiplier number is ${multiplierNumber}`)

    for (let i = 0; i < map1.length - 1; i++) {
      pairs.push(map1[i] + "-" + map1[i + 1]);
    }
    
    pairsShow = pairs.slice(0, 3);
    
    console.log("The first 3 pairs are to be shown")

    let iterator = pairsShow.values(); //daqui pra baixo: p aparecer como lista
    for (let elements of iterator) {
        console.log(elements);
    }

}
  
showPairs(nums);

//2- Volvemos a la números... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci? https://www.mathsisfun.com/numbers/fibonacci-sequence.html

function fibonacci(num) {
    let a = 0, b = 1;
    console.log(a);
    console.log(b);
  
    for (let i = 3; i <= num; i++) {
      let c = a + b;
      console.log(c);
      a = b;
      b = c;
    }
}
  
fibonacci(10);  // Output: 0 1 1 2 3 5 8 13 21 34

//2.1 Puedes añadir además, la posición de cada resultado?

function fibonacci(num) {
    let a = 0, b = 1;

    console.log(`(position #1) ${a}`);
    console.log(`(position #2) ${b}`);
  
    for (let i = 3; i <= num; i++) {
      let c = a + b;
      console.log((`(position #${i}) ${c}`));
      a = b;
      b = c;
      
    }
}
  
fibonacci(10); 

//2.2 Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.

fibonacciList = []

function fibonacci(num) {
    let a = 0, b = 1;
    fibonacciList.push(a,b)

    console.log(`(position #1) ${a}`);
    console.log(`(position #2) ${b}`);
  
    for (let i = 3; i <= num; i++) {
      let c = a + b;
      fibonacciList.push(c)
      console.log((`(position #${i}) ${c}`));
      a = b;
      b = c;
    }
    console.log(`Aquí está la sequencia fibonacci: ${fibonacciList}`)
}
  
fibonacci(10); 

//2.3 Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.

//hecho nos outros

//2.4 Ahora, muestra los resultados en forma piramidal:


fibonacciList = []

function fibonacci(num) {

    let a = 0, b = 1;

    fibonacciList.push(a,b)

    for (let i = 3; i <= num; i++) {
      let c = a + b;
      fibonacciList.push(c)

      a = b;
      b = c;
    }

    console.log(`Aquí está la sequencia fibonacci:`)

    for (i=2;i<=num;i++){
        fibonacciList[i] = fibonacciList[i-1] + fibonacciList[i-2];
    }

    for (i=0;i<fibonacciList.length;i++){
    console.log(fibonacciList.slice(0,i+1).join(' '));
    }

    for (i=fibonacciList.length-2;i>=0;i--){
        console.log(fibonacciList.slice(0,i+1).join(' '));
    }
}

fibopiramid(10);

//3- Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creando un nuevo código.

const num = [3, 7, 1, 2];

const codeScript = (code) => code.push(code.shift());

/*
Explicaçao: Básicamente, con push agregamos un nuevo elemento al final de la matriz, y el nuevo elemento
que agregamos es el valor de retorno del método shift , que elimina el primer elemento de una
matriz y lo devuelve.
*/

console.log(num)

codeScript(num);
console.log(num)

codeScript(num);
console.log(num)

codeScript(num);
console.log(num)

codeScript(num);
console.log(num)

//3.1 Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)

const num1 = [3, 7, 1, 2];

const num2 = [8, 5, 6, 4];

const nums = []

const codeScript = (code1, code2) => {
    code1.push(code1.shift())
    nums.push(code1)

    code2.push(code2.shift())
    nums.push(code2)

    console.log(nums)
}

codeScript(num1, num2)

//3.2 Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, multiplicaremos a cada número por otro número cuyo resultado no sea superior a 10. (Si el resultado és superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores). .

const num1 = [3, 7, 1, 2];

const num2 = [8, 5, 6, 4];

const nums = []

const codeScript = (code1, code2, mult) => {

  code1.push(code1.shift())
  console.log(code1)

  const map1 = code1.map(x => x * mult < 10 ? x * mult : 9) //la función crea una nueva matriz llamada map1mapeando los elementos code1y multiplicando cada elemento por mult. Si el resultado de esta multiplicación es menor que 10, se incluye en la map1matriz. De lo contrario, el valor 9 se incluye en la map1matriz. Luego, la map1matriz se inserta en la numsmatriz.
  nums.push(map1)

  code2.push(code2.shift())
  console.log(code2)

  const map2 = code2.map(x => x * mult < 10 ? x * mult : 9)
  nums.push(map2)

  console.log(nums)
}

codeScript(num1, num2, 2)

//para o proximo exercicio:

const num1 = [1, 2, 3, 4];

const num2 = [4, 3, 2, 1];

const nums = []

const codeScript = (code1, code2, mult) => {

  code1.push(code1.shift())
  console.log(code1)

  const map1 = code1.map(x => x * mult) 
  nums.push(map1)

  code2.push(code2.shift())
  console.log(code2)

  const map2 = code2.map(x => x * mult)
  nums.push(map2)

  console.log(nums)
}

codeScript(num1, num2, 2)

//3.3 Ahora, implementa en otra funcion aparte el decrypter(), que recibirá como argumento un código encriptado (haciendo referencia al apartado 3.2) y nos devuelva el código desencriptado.

const num1 = [1, 2, 3, 4];

const num2 = [4, 3, 2, 1];

const codeScript = (code1, code2, mult) => {
  console.log("Primeiro numero:")
  console.log(code1)

  const map1 = code1.map(x => x * mult)
  console.log("Primeiro numero encriptogafado:")
  console.log(map1)

  console.log("Segundo numero:")
  console.log(code2)

  const map2 = code2.map(x => x * mult)
  console.log("Segundo numero encriptogafado:")
  console.log(map2)

  descrypter(map1, map2, mult)
}

const descrypter = (code1, code2, div) => {

  const map3 = code1.map(function(item) {
    return item / div;
  });

  console.log("Primeiro numero desencriptogafado:")
  console.log(map3)

  const map4 = code2.map(function(item) {
    return item / div;
  });

  console.log("Segundo numero desencriptogafado:")
  console.log(map4)
};

codeScript(num1, num2, 2);

//3.4 Añade las dos funciones a la misma función padre, de forma que encripte y desencripte a la vez cuando termine de ejecutarse.

const num1 = [1, 2, 3, 4];

const num2 = [4, 3, 2, 1];

const codeScript = (code1, code2, mult) => {
  console.log("Primeiro numero:")
  console.log(code1)

  const map1 = code1.map(x => x * mult)
  console.log("Primeiro numero encriptogafado:")
  console.log(map1)

  console.log("Segundo numero:")
  console.log(code2)

  const map2 = code2.map(x => x * mult)
  console.log("Segundo numero encriptogafado:")
  console.log(map2)

  descrypter(map1, map2, mult)
}

const descrypter = (code1, code2, div) => {

  const map3 = code1.map(function(item) {
    return item / div;
  });

  console.log("Primeiro numero desencriptogafado:")
  console.log(map3)

  const map4 = code2.map(function(item) {
    return item / div;
  });

  console.log("Segundo numero desencriptogafado:")
  console.log(map4)
};

const code = () => {
codeScript(num1, num2, 2);
}

code()

//3.5 Ahora tienes que modificar la funcion, añadiendo el diccionario que esta mas abajo. El usuario solo podrá introducir letras o espacios, cada letra estará relacionada con un número del 0 al 4. Solo podemos introducir palabras de máximo 4 letras. Si són mas pequeñas de 4 añadir espacios para llegar a 4.

const dictionary = {
  0: ['A', 'K', 'T', 'F', 'O', 'Y'],
  1: ['B', 'L', 'U', 'G', 'P', 'Z'],
  2: ['C', 'M', 'V', 'H', 'Q', '.'],
  3: ['D', 'N', 'W', 'I', 'R', ','],
  4: ['E', 'Ñ', 'X', 'J', 'S', ' ']
}

const word = "A"

const checkValues = (index) => {

  let object = Object.values(dictionary[index]);

  for(let i=0; i< object.length; i++){
    if(word.includes(object[i])) {
      console.log(Object.keys(dictionary))
    } else{
      console.log("Nop")
    }
  }
}

checkValues(0)

const codeScript = (word) => {

  while (word.length < 4){
    letters.push(' ')
  }

}

codeScript("HI  ", "WE  ", "NEED", "HELP")

"HI__" = 2344
-> 'H' hace referencia al valor 2 del objeto
-> 'I' hace referencia al valor 3 del objeto
-> ' ' el espacio hace referencia al valor 4 del objeto

//! Nao fiz.

//4- Crea un programa que use la encriptación Romana. Entonces, el programa deberá recibir CODERS y retornar CEORDS

function encrypt(word) {
  let result = ""
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      result += word[i + 1]
    } else {
      result += word[i - 1]
    }
  }
  return result
}

let encrypted = encrypt("CODERS")
console.log(encrypted) // CEORDS

// 4.1- Programa el desencriptador, pasa como parámetro CEORDS y que devuelva CODERS.

function encrypt(word) {
  let result = ""
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      result += word[i + 1]
    } else {
      result += word[i - 1]
    }
  }
  return result
}

let encrypted = encrypt("CODERS")

function decrypt(word) {
  let result = ""
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      result += word[i + 1]
    } else {
      result += word[i - 1]
    }
  }
  return result
}

let decrypted = decrypt(encrypted)
console.log(decrypted) // CODERS

//4.2- Agrupa la función Encrypt y Decrypt en una unica función, de forma que introduzcas como parámetro CODERS y devuelva CODERS (con todas las transformaciones internas hechas y mostrando, entre medias, la transformación)

function encrypt(word) {
  let result = ""
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      result += word[i + 1]
    } else {
      result += word[i - 1]
    }
  }
  console.log(result)
  return decrypt(result)
}

function decrypt(word) {
  let result = ""
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      result += word[i + 1]
    } else {
      result += word[i - 1]
    }
  }
  console.log(result)
  return result
}

encrypt("CODERS")

//4.3- Lo tienes? Prueba ahora con ISDICODERS. Cambia la función para que pueda aceptar palabras más largas.


function encrypt(word) {
  let result = ""
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      result += word[i + 1]
    } else {
      result += word[i - 1]
    }
  }
  console.log(result)
  return decrypt(result)
}

function decrypt(word) {
  let result = ""
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      result += word[i + 1]
    } else {
      result += word[i - 1]
    }
  }
  console.log(result)
  return result
}

encrypt("ISDICODERS")

//5- El nombre de los números
//Crea un programa al que le introduces un número como parámetro del 0 al 100 y devuelve el número transformado a alfabeto normal, es decir:

function fullWrittenNumber(num) {
  
  if (num === 0) { // Return "zero" for the number 0
    return "zero";
  }
  
  const writtenNumbers = [ // Create an array of written numbers from 0 to 100
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight",
    "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one",
    "twenty two", "twenty three", "twenty four", "twenty five", "twenty six",
    "twenty seven", "twenty eight", "twenty nine", "thirty", "thirty one",
    "thirty two", "thirty three", "thirty four", "thirty five", "thirty six",
    "thirty seven", "thirty eight", "thirty nine", "forty", "forty one",
    "forty two", "forty three", "forty four", "forty five", "forty six",
    "forty seven", "forty eight", "forty nine", "fifty", "fifty one",
    "fifty two", "fifty three", "fifty four", "fifty five", "fifty six",
    "fifty seven", "fifty eight", "fifty nine", "sixty", "sixty one",
    "sixty two", "sixty three", "sixty four", "sixty five", "sixty six",
    "sixty seven", "sixty eight", "sixty nine", "seventy", "seventy one",
    "seventy two", "seventy three", "seventy four", "seventy five",
    "seventy six", "seventy seven", "seventy eight", "seventy nine", "eighty",
    "eighty one", "eighty two", "eighty three", "eighty four", "eighty five",
    "eighty six", "eighty seven", "eighty eight", "eighty nine", "ninety",
    "ninety one", "ninety two", "ninety three", "ninety four", "ninety five",
    "ninety six", "ninety seven", "ninety eight", "ninety nine", "one hundred"
  ];

  // Return the written form of the number
  return writtenNumbers[num];
}

console.log(fullWrittenNumber(12)); // Output: "twelve"

//6- Modificando un texto
//Recibiendo el siguiente texto por parámetro a tu función... :

const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."

console.log(text)

function scryptText(text) {
  // replaceAll "." with ","
  text = text.replaceAll(".", ",");

  // replaceAll "," with ""
  text = text.replaceAll(",", "");

  // replaceAll "dolor" with "potato"
  text = text.replaceAll("dolor", "potato");

  // replaceAll "lorem" with "tomato"
  text = text.replaceAll("lorem", "tomato");

  // replaceAll "labor" with "cucumber"
  text = text.replaceAll("labor", "cucumber");

  // replaceAll "consequatur" with "garlic"
  text = text.replaceAll("consequatur", "garlic");

  // replaceAll "ipsum" with "onion"
  text = text.replaceAll("ipsum", "onion");

  return text;
}

scryptText(text)

//6.1 Añade una funcionalidad que cuente cuantos cambios/coincidencias ha encontrado de cada palabra, y te los muestre de una forma amigable para el usuario

const text = "Lorem ipsum dolor ipsum sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."

console.log(text)

function modifyText(text) {
  let changes = {};

  // Replace "." with ","
  text = text.replace(/\./g, ",");
  changes["."] = text.match(/,/g).length;

  // Replace "," with ""
  text = text.replace(/,/g, "");
  changes[","] = text.match(/,/g).length;

  // Replace "dolor" with "potato"
  text = text.replace(/dolor/g, "potato");
  changes["dolor"] = text.match(/potato/g).length;

  // Replace "lorem" with "tomato"
  text = text.replace(/lorem/g, "tomato");
  changes["lorem"] = text.match(/tomato/g).length;

  // Replace "labor" with "cucumber"
  text = text.replace(/labor/g, "cucumber");
  changes["labor"] = text.match(/cucumber/g).length;

  // Replace "consequatur" with "garlic"
  text = text.replace(/consequatur/g, "garlic");
  changes["consequatur"] = text.match(/garlic/g).length;

  // Replace "ipsum" with "onion"
  text = text.replace(/ipsum/g, "onion");
  changes["ipsum"] = text.match(/onion/g).length;
  // En este caso, el match()método se usa para contar cuántas veces aparece un patrón en particular en la textcadena modificada. Por ejemplo, la línea changes[","] = text.match(/,,/g).length;cuenta cuántas veces ",,"aparece el patrón en la textcadena después de que todas las comas hayan sido reemplazadas por una cadena vacía. La gbandera se utiliza para realizar una búsqueda global, lo que significa que buscará todas las apariciones del patrón en lugar de detenerse en la primera. La lengthpropiedad de la matriz devuelta pormatch()dará la cantidad de elementos en la matriz, que es igual a la cantidad de veces que se encontró el patrón en la cadena.

  return { text, changes };
}

scryptText(text)