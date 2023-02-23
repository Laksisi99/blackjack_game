let cards = []

let sum = 0 

let hasBlackJack = false

let isAlive = false

let message = ""

let questionsEl = document.getElementById("questions-el")

let sumEl = document.querySelector("#sum-el")

let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")


// let player = {
//     name : "Roshan",
//     points : 300
// }

// playerEl.textContent = player.name + ": $" + player.points


let readyEl = document.getElementById("ready")


function enterName() {
   let val = document.getElementById("name-el").value;
   readyEl.textContent =  val + " Click CLICK ME button to continue" 

  }

 
function getRandomCard()
{
    let random_number = Math.floor(Math.random()*13) + 1

    if (random_number > 10){
        return 10
    } else if (random_number === 1){
        return 11
    } else {
        return random_number
    }
}

function startGame()
{

    isAlive = true

    let firstCard =  getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    
    renderGame()
}

function renderGame()
{
    cardsEl.textContent = "Cards:" 

    for(let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum:" + sum

    playerEl.textContent = "Points: $" + sum

    if (sum <= 20){
        message = "Do you want to draw a new card? 🤔🤔🤔"
    }else if(sum === 21){
        message = "Yeah!!! You got blackjack 🤩🃏🤩"
        hasBlackJack = true
    }else {
        message = "Sorry!!! You lost 😢😢😢"
        isAlive = false
    }
    
    questionsEl.textContent = message

    
}

function newCard()
{
    if(isAlive === true && hasBlackJack === false){

        let card = getRandomCard()

        sum += card

        cards.push(card)

        renderGame()
    }
    
}

