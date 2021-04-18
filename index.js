var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.getElementById("img1").src = 'images/dice'+randomNumber1+'.png';
document.getElementById("img2").src = 'images/dice'+randomNumber2+'.png';
if (randomNumber1>randomNumber2){
  document.querySelector('h1').innerHTML="Player1 Wins! 🚩";
}
else if (randomNumber1<randomNumber2){
  document.getElementById('title').innerHTML="Player2 Wins! 🚩";
}
else {
  document.getElementById('title').innerHTML="Draw!";
}
