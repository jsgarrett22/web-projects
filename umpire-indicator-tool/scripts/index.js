// Grab all the buttons from DOM
let newGameBtn = document.getElementById("new-game-btn");
let strikeBtn = document.getElementById("strike-btn");
let ballBtn = document.getElementById("ball-btn");

// Grab all counter <p>
let inningEl = document.getElementById("current-inning");
let strikesEl = document.getElementById("strikes");
let ballsEl = document.getElementById("balls");
let outsEl = document.getElementById("outs");

let currentInning = 1;
let strikes = 0;
let balls = 0;
let outs = 0;

// track state of a game and state of inning table
let isAlive = false;
let inningTableRendered = false;

newGameBtn.onclick = () => {
    
    isAlive = true;
    resetValues();  // lets reset all values when we start a new game
    // renderInningTable();
    // inningTableRendered = true;
};


// when the strike button is clicked, increment strikes by 1 until 3 strikes = 1 out.
strikeBtn.onclick = () => {
    if (outs < 3) {
        if (strikes < 3) {
            strikes++;
            strikesEl.textContent = "Strikes: ".toUpperCase() + strikes;
            if (strikes === 3) {
                outs++;
                strikes = 0;
                strikesEl.textContent = "Strikes: ".toUpperCase() + strikes;
                outsEl.textContent = "Outs: ".toUpperCase() + outs;
                alert("The batter is out!");
            }
            strikesEl.textContent = "Strikes: ".toUpperCase() + strikes;
        } else {
            strikes = 0;
            strikesEl.textContent = "Strikes: ".toUpperCase() + strikes;
        }
        if (outs === 3) {
            outs = 0;
            outsEl.textContent = "Outs: ".toUpperCase() + outs;
            currentInning += 1;
            inningEl.textContent = "Current Inning: ".toUpperCase() + currentInning;
        }
    }
}

ballBtn.onclick = () => {
    if (balls < 4) {
        balls++;
        ballsEl.textContent = "Balls: ".toUpperCase() + balls;
        if (balls === 4) {
            balls = 0;
            ballsEl.textContent = "Balls: ".toUpperCase() + balls;
            alert("Ball four. Take your base!");
        }
    } else {
        balls = 0;
        ballsEl.textContent = "Balls: ".toUpperCase() + balls;
    }
}

// Resets all variables to a default value zero with the starting inning being the top of 1st.
function resetValues() {

    currentInning = 1;
    strikes = 0;
    balls = 0;
    outs = 0;

    inningEl.textContent = "Current Inning: ".toUpperCase() + currentInning;
    strikesEl.textContent = "Strikes: ".toUpperCase() + strikes;
    ballsEl.textContent = "Balls: ".toUpperCase() + balls;
    outsEl.textContent = "Outs: ".toUpperCase() + outs;

}

// renders the inning table html to the page.
function renderInningTable() {
    // render table
}