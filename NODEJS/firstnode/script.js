setTimeout(() =>{
 console.log("prit")
},5000);
let r = document.querySelector(".rock");
let p = document.querySelector(".paper");
let s = document.querySelector(".seasor");
let t = document.querySelector(".toggle")


let yourScore = document.getElementById("yourScore");
let comScore = document.getElementById("comScore");

let youw = 0; // your wins
let comw = 0; // computer wins

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1; // 1=Rock, 2=Paper, 3=Scissor
}

function playRound(you) {
    let com = getComputerChoice();

    if (you === com) {
        alert("Draw!");
    } else if (
        (you === 1 && com === 3) || // Rock beats Scissor
        (you === 2 && com === 1) || // Paper beats Rock
        (you === 3 && com === 2)    // Scissor beats Paper
    ) {
        youw++;
        alert("You Win! 🎉");
    } else {
        comw++;
        alert("You Lose 😢");
    }

    // ✅ Update the scoreboard
    yourScore.textContent = youw;
    comScore.textContent = comw;
}

r.onclick = () => playRound(1); // Rock
p.onclick = () => playRound(2); // Paper
s.onclick = () => playRound(3); // Scissor
 let to = "light"; 

let b = document.querySelector("body")
    t.onclick = () => {
      if (to === "light") {
        b.style.backgroundColor="black"
                b.style.color="white"
        
        
        to="dark";
    
      } else {
        b.style.backgroundColor="white"
        b.style.color="black"

        to="light";
       
      }
    };