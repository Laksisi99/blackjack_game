// let age = 20

// if(age < 21){
//     console.log("Sorry!!! We can not allow you to play ")
// }else{
//     console.log("Welcome to BlackJack")
// }

let firstCard = Math.floor(Math.random()*11) + 2

let secondCard = Math.floor(Math.random()*11) + 2

let sum = firstCard + secondCard + 4

let hasBlackJack = false

let isAlive = true

if (sum <= 20){
    console.log("Do you want to draw a new card? 🤔🤔🤔")
}else if(sum === 21){
    console.log("Yeah!!! You got blackjack 🤩🃏🤩")
    hasBlackJack = true
}else {
    console.log("Sorry!!! You lost 😢😢😢")
    isAlive = false
}

console.log(hasBlackJack)