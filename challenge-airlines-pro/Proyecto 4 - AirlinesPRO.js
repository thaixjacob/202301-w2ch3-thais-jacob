let withScale = []

let userName = ""

const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];
  
const askForNameAndGreet = () => {
    userName = prompt('Welcome to Airlines ISDI Coders! May I have your name?')
    if (userName === "" || userName === null) {
        userName = "passenger"
    }
    window.alert(`Hello ${userName}! Let me help you with your next trip.\nLet's check the available flights:`)
}


const showFlights = () => {
    console.log("Here are the flights:")
    console.log("-------------------------------------------------------------------------------------------✈")
    for (let i = 0; i < flights.length; i++) { 
        if (flights[i].scale === true) {
            withScale.push(flights[i]);
            console.log(`The flight ${flights[i].id} with origin: ${flights[i].from} and destination: ${flights[i].to} has a cost of ${flights[i].cost.toLocaleString('es-ES', {style: 'currency', currency: 'EUR'})}, with a stopover.`)
        } else {
    console.log(`The flight ${flights[i].id} with origin: ${flights[i].from} and destination: ${flights[i].to} has a cost of ${flights[i].cost.toLocaleString('es-ES', {style: 'currency', currency: 'EUR'})}, without stopover.`)};
    }console.log("-------------------------------------------------------------------------------------------✈")
};

const askForRole = () => {
    const role = prompt(`Dear ${userName}, are you a USER or ADMIN?`)
    if(role === null) {
        askForRole()
    } else if(
        role.toUpperCase() !== 'USER' && role.toUpperCase() !== 'ADMIN'){ 
        askForRole()
    } else {
        return role.toUpperCase() 
    }
}

const lastFlights = () => {  
    let lastQuestion = confirm(`Dear ${userName}, would you like to view the last 5 flights of the day?`);
  
    if (lastQuestion){
        console.log(`✈ The last five flights today are:`)
        const lastFlights = flights.slice(5)
    for (let i = 0; i < lastFlights.length; i++) {
        console.log(`Departure from ${lastFlights[i].from} to ${lastFlights[i].to}.`)};
}}

const askForActionAdmin = () => { 
    const action = prompt('Do you want to CREATE a new flight or DELETE? [CREATE/DELETE]')
    if(action === null || action === "") {
        askForActionAdmin()
    } else if(
        action.toUpperCase() !== 'CREATE' && action.toUpperCase() !== 'DELETE'){
        askForActionAdmin()
    } else {
        return action.toUpperCase()
    }
}

const adminRole = () => {
    const adminRoleResult = askForActionAdmin()
    if (adminRoleResult === 'CREATE'){
        if (flights.length >= 15 + 1) {
            window.alert("It has exceeded the number of flights for today.");
        }
        let newFlight = {}
        newFlight.id = flights.length, -1, + 1
        newFlight.to = prompt('Where does the flight go?')
        newFlight.from = prompt('Where does the flight depart from?')
        newFlight.cost = prompt('How much is the ticket for this flight?')
        newFlight.scale = prompt("Are there any stopovers on this flight, true or false? [true/false]")
        if (newFlight.scale === "true") {
            newFlight.scale = true
        } else {
            newFlight.scale = false}
        flights.push(newFlight) 
        window.alert (`The flight has been successfully created.`)
        console.log(`✈ Update: New flight added.`)
        showFlights()
        adminRole()
    } else { 
        const flightsToDelete = +prompt('Enter the ID of the flight you wish to delete:')
        flights.splice(flightsToDelete, 1) 
        window.alert (`The flight with ID ${flightsToDelete} has been successfully deleted.`)
        console.log(`✈ Update: Flight with ID ${flightsToDelete} has been deleted.`)
        showFlights()
        window.alert("Thanks for visiting our airline. See you soon!")
    }
}

const userRole = () => {
    const askForPrice = +prompt(`✈ Price filter\nDear ${userName}, what is your budget?`)
    if (askForPrice === null) {
        window.alert("Thanks for visiting our airline. See you soon!")
    } console.log("✈ See below for flights that fit your budget:")
    const flightsForUser = []
    flights.forEach((flight) => {
        if(flight.cost <= askForPrice){
            flightsForUser.push(flight)
            console.log(`The flight ${flight.id} with origin: ${flight.from} and destination: ${flight.to} has a cost of ${flight.cost.toLocaleString('es-ES', {style: 'currency', currency: 'EUR'})}.`)
        }
    })
    window.alert("Thanks for visiting our airline. See you soon!")
}

const playAirline = () => {
    askForNameAndGreet()
    showFlights()
    const average = flights.reduce((total, next) => total + next.cost, 0) / flights.length; //to calculate the average
    console.log(`✈ The average price of flights is ${average.toLocaleString('es-ES', {style: 'currency', currency: 'EUR'})} and there are ${withScale.length} flights with stopovers.`);
    lastFlights()
    const askUserOrAdmin = askForRole()
    if (askUserOrAdmin === 'ADMIN') {
        adminRole()
    } else {
        userRole()
    }
}

playAirline()
