// let age = 20

// if(age < 21){
//     console.log("Sorry!!! We can not allow you to play ")
// }else{
//     console.log("Welcome to BlackJack")
// }

let firstCard = Math.floor(Math.random()*11) + 2

let secondCard = Math.floor(Math.random()*11) + 2


let sum = firstCard + secondCard 

let hasBlackJack = false

let isAlive = true

let message = ""

let questionsEl = document.getElementById("questions-el")

let sumEl = document.querySelector("#sum-el")

let cardsEl = document.getElementById("cards-el")

let card = Math.floor(Math.random()*11) + 2

function startGame()
{
    renderGame()
}

function renderGame()
{
    cardsEl.textContent = "Cards:" + firstCard + " " + secondCard
    sumEl.textContent = "Sum:" + sum

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
    let card = Math.floor(Math.random()*11) + 2

    sum += card

    renderGame()
}

