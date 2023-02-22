let cards = []

let sum = 0 

let hasBlackJack = false

let isAlive = false

let message = ""

let questionsEl = document.getElementById("questions-el")

let sumEl = document.querySelector("#sum-el")

let cardsEl = document.getElementById("cards-el")

let player = {
    name : "Roshan",
    points : 300
}


let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.points

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
    let age = prompt("What is your age?")

    let name = prompt("What is your name?")


    if(age > 18)
    {

        alert(name + " " +"You can play now!!!")
        
        cardsEl.textContent = "Cards:" 

        for(let i = 0; i < cards.length; i++)
        {
            cardsEl.textContent += cards[i] + " "
        }

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
    }else{
        alert("Sorry" + name + " " + "We can not allow you to play BlackJack")
    }
   
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

// let cards = []

// let sum = 0 

// let hasBlackJack = false

// let isAlive = false

// let message = ""

// let questionsEl = document.getElementById("questions-el")

// let sumEl = document.querySelector("#sum-el")

// let cardsEl = document.getElementById("cards-el")

// let player = {
//     name : "Roshan",
//     points : 300
// }


// let playerEl = document.getElementById("player-el")

// playerEl.textContent = player.name + ": $" + player.points

// function getRandomCard()
// {
//     let random_number = Math.floor(Math.random()*13) + 1

//     if (random_number > 10){
//         return 10
//     } else if (random_number === 1){
//         return 11
//     } else {
//         return random_number
//     }
// }

// function startGame()
// {
//     isAlive = true

//     let firstCard =  getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard , secondCard]
//     sum = firstCard + secondCard
    
//     renderGame()
// }

// function renderGame()
// {
//     cardsEl.textContent = "Cards:" 

//     for(let i = 0; i < cards.length; i++)
//     {
//         cardsEl.textContent += cards[i] + " "
//     }

//     sumEl.textContent = "Sum:" + sum

//     if (sum <= 20){
//         message = "Do you want to draw a new card? 🤔🤔🤔"
//     }else if(sum === 21){
//         message = "Yeah!!! You got blackjack 🤩🃏🤩"
//         hasBlackJack = true
//     }else {
//         message = "Sorry!!! You lost 😢😢😢"
//         isAlive = false
//     }
    
//     questionsEl.textContent = message
   
// }

// function newCard()
// {
//     if(isAlive === true && hasBlackJack === false){

//         let card = getRandomCard()

//         sum += card

//         cards.push(card)

//         renderGame()
//     }
    
// }

