// Dice Simulator

// setInterval & clearInterval
// let x = 10;
// // has to be in milisec
// let timer = scrollToetInterval(countdown, 2000); // setInterval runs forever until interval is cleared
// function countdown() {
//   console.log(x);
//   x--;
//   if (x ==0) {
//     clearInterval(timer);
//   }
// }
// setTimeout - same as setInterval, but it runs the function a SINGLE time only
//  e.g. setTimeout(animateDice, 2000) will run the animateDice function once, but after 2 sec then never again

let angle1 = 0;
let angle2 = 0;
let timer = setInterval(animateDice, 200);

// HTML Variables
let numDiceEl = document.getElementById("num-dice");
let numSidesEl = document.getElementById("num-sides");

let selectEl = document.getElementById("roll-menu");
let rollBtn = document.getElementById("roll-btn");
let resetBtn = document.getElementById("reset-btn");
let dice1Img = document.getElementById("dice-1");
let dice2Img = document.getElementById("dice-2");
let historyBox = document.getElementById("roll-history");

// EVENT LISTENERS
rollBtn.addEventListener("click", rollDice);
resetBtn.addEventListener("click", resetDice);

// EVENT FUNCTIONS

// Roll Dice
function rollDice() {
  // console.log(selectEl.value);

  // Stop the dice animation
  clearInterval(timer);

  // Roll Dice Once
  if (selectEl.value == "roll-1") {
    // One Dice
    if (+numDiceEl.value == 1) {
      let dice1 = Math.random() * +numSidesEl.value + 1;
      dice1 = Math.floor(dice1);
      dice1Img.src = `images/${dice1}.png`;
      dice2Img.src = `images/0.png`;
      historyBox.innerHTML += `<span> ${dice1}</span>`;
      // Two Dice
    } else if (+numDiceEl.value == 2) {
      // Create random numbers to represent the dice roll
      let dice1 = Math.random() * +numSidesEl.value + 1;
      // Math.random() * 6 + 1; // 1 - 6.999...
      let dice2 = Math.random() * +numSidesEl.value + 1;
      dice1 = Math.floor(dice1); // rounds to the nearest whole #
      dice2 = Math.floor(dice2);
      console.log(dice1);
      console.log(dice2);
      // display the right iamges
      dice1Img.src = `images/${dice1}.png`;
      dice2Img.src = `images/${dice2}.png`;
      // update the history box
      historyBox.innerHTML += `<span> ${dice1}, ${dice2} </span>`;
      // Three Dice
    } else if (+numDiceEl.value == 3) {
      let dice1 = Math.random() * +numSidesEl.value + 1;
      let dice2 = Math.random() * +numSidesEl.value + 1;
      let dice3 = Math.random() * +numSidesEl.value + 1;
      dice1 = Math.floor(dice1);
      dice2 = Math.floor(dice2);
      dice3 = Math.floor(dice3);
      // display the right images
      dice1Img.src = `images/${dice1}.png`;
      dice2Img.src = `images/${dice2}.png`;
      // update the history box
      historyBox.innerHTML += `<span> ${dice1}, ${dice2}, ${dice3} </span>`;
      // Four Dice
    } else if (+numDiceEl.value == 4) {
      let dice1 = Math.random() * +numSidesEl.value + 1;
      let dice2 = Math.random() * +numSidesEl.value + 1;
      let dice3 = Math.random() * +numSidesEl.value + 1;
      let dice4 = Math.random() * +numSidesEl.value + 1;
      dice1 = Math.floor(dice1);
      dice2 = Math.floor(dice2);
      dice3 = Math.floor(dice3);
      dice4 = Math.floor(dice4);
      // display the right images
      dice1Img.src = `images/${dice1}.png`;
      dice2Img.src = `images/${dice2}.png`;
      // update the history box
      historyBox.innerHTML += `<span> ${dice1}, ${dice2}, ${dice3}, ${dice4} </span>`;
    } else {
      alert("ERROR. Check inputs.");
    }
  }

  // Roll Dice 5 Times
  if (selectEl.value == "roll-5") {
    let count = 0;
    // One Dice
    if (+numDiceEl.value == 1) {
      while (count < 5) {
        let dice1 = Math.random() * +numSidesEl.value + 1;
        dice1 = Math.floor(dice1);
        dice1Img.src = `images/${dice1}.png`;
        dice2Img.src = `images/0.png`;
        historyBox.innerHTML += `<span> ${dice1}</span>`;
        count += 1;
      }
      // Two Dice
    } else if (+numDiceEl.value == 2) {
      while (count < 5) {
        let dice1 = Math.random() * +numSidesEl.value + 1;
        let dice2 = Math.random() * +numSidesEl.value + 1;
        dice1 = Math.floor(dice1);
        dice2 = Math.floor(dice2);
        dice1Img.src = `images/${dice1}.png`;
        dice2Img.src = `images/${dice2}.png`;
        historyBox.innerHTML += `<span> ${dice1}, ${dice2} </span>`;
        count += 1;
      }
      // Three Dice
    } else if (+numDiceEl.value == 3) {
      while (count < 5) {
        let dice1 = Math.random() * +numSidesEl.value + 1;
        let dice2 = Math.random() * +numSidesEl.value + 1;
        let dice3 = Math.random() * +numSidesEl.value + 1;
        dice1 = Math.floor(dice1);
        dice2 = Math.floor(dice2);
        dice3 = Math.floor(dice3);
        dice1Img.src = `images/${dice1}.png`;
        dice2Img.src = `images/${dice2}.png`;
        historyBox.innerHTML += `<span> ${dice1}, ${dice2}, ${dice3} </span>`;
        count += 1;
      }
      // Four Dice
    } else if (+numDiceEl.value == 4) {
      while (count < 5) {
        let dice1 = Math.random() * +numSidesEl.value + 1;
        let dice2 = Math.random() * +numSidesEl.value + 1;
        let dice3 = Math.random() * +numSidesEl.value + 1;
        let dice4 = Math.random() * +numSidesEl.value + 1;
        dice1 = Math.floor(dice1);
        dice2 = Math.floor(dice2);
        dice3 = Math.floor(dice3);
        dice4 = Math.floor(dice4);
        dice1Img.src = `images/${dice1}.png`;
        dice2Img.src = `images/${dice2}.png`;
        historyBox.innerHTML += `<span> ${dice1}, ${dice2}, ${dice3}, ${dice4} </span>`;
        count += 1;
      }
    } else {
      alert("ERROR. Check inputs.");
    }
  }

  // Roll Dice X times
  if (selectEl.value == "roll-x") {
    let userX = prompt("How many times do you want to roll the dice?");
    let count = 0;
    while (count < userX) {
      let dice1 = Math.random() * +numSidesEl.value + 1;
      let dice2 = Math.random() * +numSidesEl.value + 1;
      dice1 = Math.floor(dice1);
      dice2 = Math.floor(dice2);
      dice1Img.src = `images/${dice1}.png`;
      dice2Img.src = `images/${dice2}.png`;
      historyBox.innerHTML += `<span> ${dice1}, ${dice2} </span>`;
      count += 1;
    }
  }

  // // Force infiinite loop, requires a break condition;
  // let x = 1;
  // while(true) {
  //   x++;
  //   if (x == 10) {
  //     break;
  //   }
  // }

  // Roll Dice Until Snake Eyes
  if (selectEl.value == "roll-snake") {
    if (+numDiceEl.value == 2) {
      let dice1 = 0;
      let dice2 = 0;
      while (true) {
        if (dice1 == 1 && dice2 == 1) {
          dice1Img.src = `images/1.png`;
          dice2Img.src = `images/1.png`;
          break;
        }
        dice1 = Math.random() * +numSidesEl.value + 1;
        dice2 = Math.random() * +numSidesEl.value + 1;
        dice1 = Math.floor(dice1); // 1 - 6
        dice2 = Math.floor(dice2);
        console.log(dice1);
        console.log(dice2);
        dice1Img.src = `images/${dice1}.png`;
        dice2Img.src = `images/${dice2}.png`;
        historyBox.innerHTML += `<span> ${dice1}, ${dice2} </span>`;
      }
    } else {
      alert("ERROR. There must be only 2 dice.");
    }
  }
}

// NOTE: DIfferent ways to incorporate variables into text
// let name = "Natalie";

// let sentence1 = "Hello there, " + name;
// let sentence2 = `Hello there, ${name}`

// Animate Dice
function animateDice() {
  // choose random dice image
  let rand1 = Math.floor(Math.random() * 6 + 1);
  dice1Img.src = `images/${rand1}.png`;
  let rand2 = Math.floor(Math.random() * 6 + 1);
  dice2Img.src = `images/${rand2}.png`;

  // rotate image
  angle1 += 10;
  angle2 += -10;
  // access its CSS
  dice1Img.style.transform = `rotate(${angle1}deg)`;
  dice2Img.style.transform = `rotate(${angle2}deg)`;
}

// Reset Dice
function resetDice() {
  timer = setInterval(animateDice, 200);
  historyBox.innerHTML = `<h3>Dice Roll</h3>`;
}
