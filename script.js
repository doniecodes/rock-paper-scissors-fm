//rules display
let rulesDisplay = ()=>{
    let rules = document.querySelector('.game-rules');
    let rulesBtn = document.querySelector('.game-rules-btn');
    rulesBtn.addEventListener('click', ()=>{
        rules.style.display = "block";
    })
}
rulesDisplay();

// close rules
let rulesClose = ()=>{
    let rules = document.querySelector('.game-rules');
    let rulesBtnClose = document.querySelector('.close-rules');
    rulesBtnClose.addEventListener('click', ()=>{
        rules.style.display = "none";
    })
}
rulesClose();

// player picked
let playerPicked = ()=>{
    let gameOptionsMain = document.querySelector('.game-options');
    let gamePicksMain = document.querySelector('.game-picks');
    let options = gameOptionsMain.querySelectorAll('.option');

    options.forEach((option)=>{
        //get clicked elements
        option.addEventListener('click', (event)=>{
            let clicked = event.target;
            let optionDiv = clicked.closest('.option');
            let imgOption = optionDiv.querySelector('img').src;
            let optionDivClass = optionDiv.getAttribute('class');

            // create new elements
            let newDiv = document.createElement('div');
            newDiv.classList.add('player-pick');
            newDiv.innerHTML = `
            <h3 class="pick-text">you picked</h3>
            <div class="${optionDivClass}">
            <div class="gradient">
              <img src="${imgOption}" alt="">
            </div>
          </div>
            `;
            // prepend to html
            gamePicksMain.style.display = "flex";
            gameOptionsMain.style.display = "none";
            gamePicksMain.prepend(newDiv);
            setTimeout(housePicked, 500);
        })
    })
}
playerPicked();

// house picked
let housePicked = ()=>{
    let gameOptionsMain = document.querySelector('.game-options');
    let gamePicksMain = document.querySelector('.game-picks');
    let options = gameOptionsMain.querySelectorAll('.option');

    // generate random number
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let randomPick = document.querySelector(`#option-${randomNum}`);
    let divClass = randomPick.getAttribute('class');
    let imgSrc = randomPick.querySelector('img').src;

    // create new div
    let newDiv = document.createElement('div');
    newDiv.classList.add('house-pick');
    newDiv.innerHTML = `
        <h3 class="pick-text">the house picked</h3>
          <div class="${divClass}">
            <div class="gradient">
              <img src="${imgSrc}" alt="">
            </div>
          </div>
    `;
    // append to html
        gamePicksMain.appendChild(newDiv);
        gameResults();
}


//game results
let gameResults = ()=>{
    let gameResults = document.querySelector('.game-results');
    gameResults.style.display = "block";
    let gameScore = document.querySelector('.game-scores');
    let resultText = gameResults.querySelector('.result-text');
    let playerOption = document.querySelector('.player-pick');
    let houseOption = document.querySelector('.house-pick');
    let playerOptionDiv = playerOption.querySelector('.option').getAttribute('class');
    let houseOptionDiv = houseOption.querySelector('.option').getAttribute('class');

    let paper = 'option paper';
    let rock = 'option rock';
    let scissors = 'option scissors';

    if(playerOptionDiv == paper && houseOptionDiv == rock){
        resultText.innerHTML = 'YOU WIN';
        playerWin();
    }
     else if(playerOptionDiv == paper & houseOptionDiv == scissors){
        resultText.innerHTML = 'YOU LOSE';
        playerLose()
    }
     else if(playerOptionDiv == scissors & houseOptionDiv == paper){
        resultText.innerHTML = 'YOU WIN';
        playerWin();
    }
     else if(playerOptionDiv == scissors & houseOptionDiv == rock){
        resultText.innerHTML = 'YOU LOSE';
        playerLose()
    }
     else if(playerOptionDiv == rock & houseOptionDiv == scissors){
        resultText.innerHTML = 'YOU WIN';
        playerWin();
    }
     else if(playerOptionDiv == rock & houseOptionDiv == paper){
        resultText.innerHTML = 'YOU LOSE';
        playerLose();
    } else{
        resultText.innerHTML = 'DRAW';
    }

    playAgain();
}

// update scores
let playerWin = ()=>{
    let scoreNumber = document.querySelector('.score-number');
    let count = 0;
    count ++;
    scoreNumber.innerHTML = count;
}
let playerLose = ()=>{
    let scoreNumber = document.querySelector('.score-number');
    let count = scoreNumber.innerHTML;
    count --;
    scoreNumber.innerHTML = count;
    if(count <= 0){
        count = 0;
        scoreNumber.innerHTML = count;
    }
}

// play again
let playAgain = ()=>{
    let gameOptionsMain = document.querySelector('.game-options');
    let gamePicksMain = document.querySelector('.game-picks');
    let playAgainBtn = document.querySelector('.play-again-btn');
    playAgainBtn.addEventListener('click', ()=>{
        gamePicksMain.style.display = "none";
        gameOptionsMain.style.display = "flex";
        playerPicked();
    })
}