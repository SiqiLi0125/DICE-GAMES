var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);

var dice1 = document.querySelectorAll("img")[0];
dice1.src = "images/dice"+ randomNumber1 + ".png";
var dice2 = document.querySelectorAll("img")[1];
dice2.src = "images/dice"+ randomNumber2 + ".png";

var text1 = document.querySelector("h1")

if(randomNumber1 > randomNumber2)
{

  text1 = text1.innerHTML= "Player1 Wins! "+" 🚩";
}

else if(randomNumber1 < randomNumber2)
{

  text1 = text1.innerHTML= "🚩"+"  Player2 Wins! ";
}
else if(randomNumber1 = randomNumber2)
{

  text1 = text1.innerHTML= "Draw!";
}
