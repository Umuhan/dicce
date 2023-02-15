//first dice
let randomNumber1 = Math.random() * 6;
randomNumber1 = randomNumber1 + 1;
randomNumber1 = Math.floor(randomNumber1);// to the nearest whole number

let randomDiceImg = "dice" + randomNumber1 + ".png";// dice1.png - dice6.png

let randomImgSource = "images/" + randomDiceImg;//images/dice1.png - images/dice6.png

let image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImgSource);

//second dice
let randomNumber2 = Math.random() * 6;
randomNumber2 = randomNumber2 + 1;
randomNumber2 = Math.floor(randomNumber2);// to the nearest whole number

let randomDiceImg1 = "dice" + randomNumber2 + ".png";// dice1.png - dice6.png

let randomImgSource1 = "images/" + randomDiceImg1;//images/dice1.png - images/dice6.png

let image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImgSource1);

//who won
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wins!"
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Wins!"

}else {
    document.querySelector("h1").innerHTML = "Draw!"
}

