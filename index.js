sessionInfo = sessionStorage.getItem("session_1");
if (sessionInfo === null) {
  sessionStorage.setItem("session_1", 1);

} else {

  let randomNumber1 = Math.floor((Math.random() * 6) + 1);
  let randomNumber2 = Math.floor((Math.random() * 6) + 1);

  let filePath1 = "images/dice" + randomNumber1 + ".png"
  let filePath2 = "images/dice" + randomNumber2 + ".png"


  document.querySelector(".img1").src = filePath1;
  document.querySelector(".img2").src = filePath2;


  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";

  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }

  document.querySelector(".play-again-msg").style.visibility = "visible";

}
