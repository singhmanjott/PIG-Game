/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

- 6 coding challenge included
*/

/*
let scores;
let currentScore;
let activePlayer;
let gameActive;
let randomNum1;
let randomNum2;
let targetScore = 100;

let dice1 = document.getElementById('dice-1');
let dice2 = document.getElementById('dice-2');

const controller = {
  init() {
    // Define initial variables
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    gameActive = true;
    // Set all values to zero on the webpage
    dice1.style.display = 'none';
    dice2.style.display = 'none';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
  },
  rollDice() {
    if (gameActive) {
      // Get random number between 1 and 6
      randomNum1 = Math.floor(Math.random() * 6 + 1);
      randomNum2 = Math.floor(Math.random() * 6 + 1);
      // console.log(randomNum1, randomNum2);
      dice1.style.display = 'block';
      dice2.style.display = 'block';
      dice1.src = `dice-${randomNum1}.png`;
      dice2.src = `dice-${randomNum2}.png`;
      // Update/add new number to current score if not 1 and if not two 6s in a row
      if (randomNum1 > 1 && randomNum2 > 1) {
        if (randomNum1 + randomNum2 !== 12) {
          currentScore += randomNum1 + randomNum2;
          document.getElementById(`current-${activePlayer}`).textContent = currentScore;
        } else {
          scores[activePlayer] = 0;
          document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
          this.nextPlayer(); 
        }
      } else {
      // if any num is 1, the set current to zero and change activePlayer
        this.nextPlayer();
      }
    }
  },
  holdBtn() {
    if (gameActive) {
      // add current score to global score
      scores[activePlayer] += currentScore;
      document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
      // check if player won
      if (scores[activePlayer] >= targetScore) {
        gameActive = false;
        dice1.style.display = 'none';
        dice2.style.display = 'none';
        document.getElementById(`name-${activePlayer}`).textContent = 'Winner!';
        document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
        document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
      } else {
        this.nextPlayer();
      }
    }
  },
  nextPlayer() {
    document.getElementById(`current-${activePlayer}`).textContent = '0';
    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
    currentScore = 0;
    previousNum = 0;
    dice1.style.display = 'none'; 
    dice2.style.display = 'none'; 
  },
  setTargetScore() {
    if (event.keyCode === 13) {
      console.log(event.target);
      let input = event.target.value;
      if (input) {
        targetScore = input;
        document.getElementById('target-score-header').textContent = `Target score: ${targetScore}`;
        event.target.value = "";
      }
    }
  },
}

controller.init();
document.querySelector('.btn-roll').addEventListener('click', controller.rollDice.bind(controller));
document.querySelector('.btn-hold').addEventListener('click', controller.holdBtn.bind(controller));
document.querySelector('.btn-new').addEventListener('click', controller.init);
document.getElementById('target-score-input').addEventListener('keypress', controller.setTargetScore.bind(controller));
*/
 
var score, roundScore, activePlayer, randomNumber, target = 50;

//Initiating the variables
score = [ 0, 0] ;
roundScore = 0;
activePlayer = 1;
document.querySelector('.btn-roll').style.display = 'none';
document.querySelector('.btn-add').style.display = 'none';
document.getElementById('dice-1').style.display = 'none';
document.querySelector('.btn-set').style.display = 'none';
document.querySelector('.target-score-input').style.display = 'none';

function newGame () {
    document.getElementById('current-1').textContent = '0' ;
    document.getElementById('current-2').textContent = '0' ;
    document.getElementById('score-1').textContent = '0' ;
    document.getElementById('score-2').textContent = '0' ;
    document.getElementById('dice-1').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-add').style.display = 'block';
    document.querySelector('.btn-set').style.display = 'block';
    document.querySelector('#name-1').textContent = 'Player-1';
    document.querySelector('#name-2').textContent = 'Player-2'; 
    document.querySelector('.target-score-input').style.display = 'block';
    
    if ( activePlayer == 2) {
            document.querySelector('.player-2-panel').classList.remove = 'active';
            document.querySelector('.player-1-panel').classList.add = 'active';
            activePlayer = 1; 
        }
    
    score = [ 0, 0 ] ;
    roundScore = 0;
    
}

function rollingTheDice () {
    //1. Getting the random number 
    randomNumber = Math.floor ((Math.random() * 6) + 1);
    
    //2. Displaying the dice image 
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + randomNumber + '.png';
    
    //3. Adding the number to the current number
    if ( randomNumber !== 1 ){
        roundScore += randomNumber;
        //displaying the round score in the current number block
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        
    } else {
        roundScore += randomNumber;
        score[ activePlayer -1] += roundScore;
        //displaying the round score in the current number block
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        
        document.querySelector('.player-1-panel ').classList.toggle('active');
        document.querySelector('.player-2-panel ').classList.toggle('active');
        
        document.querySelector('#dice-1').style.display = 'none';
        
        roundScore = 0 ;
        playerChange() ;
        
    }
}

function setTarget () {
    target = document.querySelector('.target-score-input').value ;
    console.log(target);
    
}

function addResult () {
    roundScore = 0 ;
    playerChange() ;
    // Showing the current score in current-box
    document.getElementById('current-' + activePlayer).textContent = roundScore ;
    // Showing the total score in the total-score-place
    document.getElementById('score-' + activePlayer).textContent = score[ activePlayer -1 ];
    
    roundScore = 0 ;
    // Hiding the dice
    document.getElementById('dice-1').style.display = 'none';
    
    //Check if the player has won the game or not
    if ( score[ activePlayer -1 ] >= target){
        // Declaring the active player as winner
        document.getElementById('name-' + activePlayer ).textContent = "Winner!" ;
        // Hiding the dice
        document.getElementById('dice-1').style.display = 'none';
        // Hiding the roll and add button
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-add').style.display = 'none';
        document.querySelector('.btn-set').style.display = 'none';
        document.querySelector('.target-score-input').style.display = 'none';
        
        playerChange () ;
        // Changing the player name and removing Active from its panel
        document.querySelector('.player-' + activePlayer + '-panel').classList.add = 'winner';
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove = 'active';
        // adding active from player-2-panel and adding it to player-1-panel
        if (activePlayer == 2 ) {
            document.querySelector('.player-1-panel').classList.toggle('active');
            document.querySelector('.player-2-panel').classList.toggle('active');
        }
    }
    playerChange () ;
    
}

function playerChange()  {    activePlayer == 1 ? activePlayer = 2 : activePlayer = 1 ;     }

//Action on clicking the roll the dice button
document.querySelector('.btn-roll').addEventListener( 'click' , rollingTheDice );
//Action on clicking the new game button
document.querySelector('.btn-new').addEventListener( 'click' , newGame );
//Action on clicking the add of the current score to the total score button
document.querySelector('.btn-add').addEventListener( 'click' , addResult );
//Setting the target score 
document.querySelector('.btn-set').addEventListener( 'click' , setTarget );
