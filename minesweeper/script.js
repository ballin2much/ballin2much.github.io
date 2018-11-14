

// Declaring variables that determine original board size, mine count, and high score table size.
let rows = 8;
let columns = 8;
let mines = 10;
let mineCount = mines;
let highScoreSize = 5; // How large the high score table will be
let spacesNeeded = rows*columns-mines; // Need this to determine how many spaces must be clicked to win.
let mobile = false;

// Initializing other variables
let timer = 0;
var timerInt = null;
let highScores = []
// On document load we want to create board and create click handlers for our reset and new board creation button
$(document).ready(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) mobile = true;
    
    createBoard();  // Creating the board
    // Handling the button to create a new board
    $('#create').submit(function(e) {
        e.preventDefault();
        let rowsT = $("input[name=rows]").val();
        let columnsT = $("input[name=columns]").val();
        let minesT = $("input[name=mines]").val();
        
        // Row and column validation handled by HTML, but we'll reject invalid minecount; otherwise create a new board with those values
        if (minesT > rowsT*columnsT -1) {
            alert('Mine count must be between 1 and Rows*Columns-1');
            return; 
        } else {
            rows = rowsT;
            columns = columnsT;
            mines = minesT;
            createBoard();
        }
    });
    
    // Reset just creates a new boad with the same rows, columns, and minecount
    $('#reset').click(function() {
        createBoard();
    });
});

function createBoard(e) {
    // We begin by clearing out and resetting the old timer and setting the current value to zero
    clearInterval(timerInt);
    timerInt = null;
    timer = 0;
    $('#timer').text(timer);

    // Clear out the current board and status message.
    $('#board').empty(); 
    $('#status').empty(); 
    
    // Re-calculate important variables and display them on top of board
    spacesNeeded = rows*columns-mines;
    mineCount = mines; 
    $('#mineCount').text(mineCount);

    // Each space is represented by a div with data values for the row, the column, and the amount of surrounding mines
    // Loop through the # of rows and colimns and create/append the space with a class of hidden
    for (i=0; i < rows; i++) {
        for (j=0; j < columns; j++) {
            let y = '<div class="space hidden" data-surrounding="0" data-row="'+i+'" data-col="'+j+'"></div>';
            $('#board').append(y);
            }
        $('#board').append('<br>');
    }

    // Loop to randomly create bombs as well as up the surrounding bomb count when bomb is created
    for (let i=0; i < mines;) {
        let r = Math.floor((Math.random()*rows));
        let c = Math.floor((Math.random()*columns));
        let bomb = getDiv(r,c);
        
        // If the randomly selected space does not already have the bomb class, we assign it and increment.
        if (!$(bomb).hasClass("bomb")) {
            i++;
            $(bomb).addClass("bomb");  
            // We then iterate through all the bombs surrounding spaces and increase their surrounding mine count by 1
            for (x=-1; x <= 1; x++) {
                for (y=-1; y <= 1; y++) {
                    let cc = c+x;
                    let rr = r+y;
                    if ((cc>=0 && rr>=0 && cc<columns && rr<rows) && !(x==0 & y==0)) { // Look into making a function that gets surrounding spaces... cause this double loop is used a lot
                        let tempSpace = getDiv(rr,cc);
                        let tempSur = tempSpace.attr('data-surrounding')
                        tempSur++;
                        tempSpace.attr('data-surrounding', tempSur);
                    }
                }
            }
        }
    }

    if (!mobile) {
        $('.hidden').click(function(e) {
            let space = $(this);
            // We'll start with hidden spaces
            if (space.hasClass('hidden')) {
                if (timerInt === null) startTimer(); // Start timer on click, regardless of it is an actual click or a flag
                if (e.shiftKey) { // Shift click
                    space.toggleClass('flagged');
                    mineCount = ((space).hasClass('flagged')) ? mineCount-1:mineCount+1; // Increment/decrement the display of remaining mines
                    $('#mineCount').text(mineCount);
                } else if (!(space.hasClass('flagged'))) { // We ignore flagged spaces
                    // Lose the game if space is a mine, otherwise reveal the space
                    if (space.hasClass('bomb')) { 
                        loseGame();
                    } else if (space.hasClass('hidden')){
                        revealSpace(space); 
                    }
                }       
            // Next we handle if the space has already been clicked.
            } else if (space.hasClass('clicked')) {
                // Set up variables
                let flaggedCount = 0;
                let clickCount = 0;
                let goingToClick = [];
                let shouldEnd = false;
                
                // We need to iterate through the surrounding spaces and get some data to determine whether the amount of flagged spaces matches the surrounding count
                let r = parseInt(space.attr('data-row'), 10);
                let c = parseInt(space.attr('data-col'), 10);
                for (let x=-1; x <= 1; x++) {
                    for (let y=-1; y <= 1; y++) {
                        let cc = c+x;
                        let rr = r+y;
                        if ((cc>=0 && rr>=0 && cc<columns && rr<rows) && !(x==0 & y==0)) {
                            let tempSpace = getDiv(rr,cc);
                            if (tempSpace.hasClass('flagged')) {
                                flaggedCount++;
                            } else if (tempSpace.hasClass('bomb')) {
                                shouldEnd = true; // We don't just end here because if the surrounding flag count does not equal surrounding mine count, we do nothing
                            } else if (!tempSpace.hasClass('clicked')) {
                                goingToClick[clickCount] = tempSpace; // Add spaces that we need to click to an array so we don't have to iterate through all surrounding spaces again.
                                clickCount++;
                            }
                        }
                    }
                }
                // If the surrounding flag count doesn't match mine count, we do nothing and return.
                // If we discovered one of the unflagged spaces was a bomb, we lose the game, otherwise we reveal all spaces we stored in our array
                if (flaggedCount != parseInt(space.attr('data-surrounding'), 10)) return; 
                if (shouldEnd) {
                    loseGame();
                } else {
                    for (let x=0; x < goingToClick.length; x++) {
                        revealSpace(goingToClick[x]);
                    }
                }
            }
        });
    } else {
        $('.hidden').singletap(function(e) {
            let space = $(this);
            // We'll start with hidden spaces
            if (space.hasClass('hidden')) {
                if (timerInt === null) startTimer(); // Start timer on click, regardless of it is an actual click or a flag
                if (!(space.hasClass('flagged'))) { // We ignore flagged spaces
                    // Lose the game if space is a mine, otherwise reveal the space
                    if (space.hasClass('bomb')) { 
                        loseGame();
                    } else if (space.hasClass('hidden')){
                        revealSpace(space); 
                    }
                }       
            // Next we handle if the space has already been clicked.
            } else if (space.hasClass('clicked')) {
                // Set up variables
                let flaggedCount = 0;
                let clickCount = 0;
                let goingToClick = [];
                let shouldEnd = false;
                
                // We need to iterate through the surrounding spaces and get some data to determine whether the amount of flagged spaces matches the surrounding count
                let r = parseInt(space.attr('data-row'), 10);
                let c = parseInt(space.attr('data-col'), 10);
                for (let x=-1; x <= 1; x++) {
                    for (let y=-1; y <= 1; y++) {
                        let cc = c+x;
                        let rr = r+y;
                        if ((cc>=0 && rr>=0 && cc<columns && rr<rows) && !(x==0 & y==0)) {
                            let tempSpace = getDiv(rr,cc);
                            if (tempSpace.hasClass('flagged')) {
                                flaggedCount++;
                            } else if (tempSpace.hasClass('bomb')) {
                                shouldEnd = true; // We don't just end here because if the surrounding flag count does not equal surrounding mine count, we do nothing
                            } else if (!tempSpace.hasClass('clicked')) {
                                goingToClick[clickCount] = tempSpace; // Add spaces that we need to click to an array so we don't have to iterate through all surrounding spaces again.
                                clickCount++;
                            }
                        }
                    }
                }
                // If the surrounding flag count doesn't match mine count, we do nothing and return.
                // If we discovered one of the unflagged spaces was a bomb, we lose the game, otherwise we reveal all spaces we stored in our array
                if (flaggedCount != parseInt(space.attr('data-surrounding'), 10)) return; 
                if (shouldEnd) {
                    loseGame();
                } else {
                    for (let x=0; x < goingToClick.length; x++) {
                        revealSpace(goingToClick[x]);
                    }
                }
            }
        }).doubletap(function() {
            let space =$(this);
            space.toggleClass('flagged');
                    mineCount = ((space).hasClass('flagged')) ? mineCount-1:mineCount+1; // Increment/decrement the display of remaining mines
                    $('#mineCount').text(mineCount);
        });
    }
}

// Helper function to get a space from the rown and column number
function getDiv(rrr, ccc) {
    return $('div[data-row="'+rrr+'"][data-col="'+ccc+'"]');
}

// Helper function that reveals all bombs
function revealBoard() {
    $('.bomb').append('<i class="fas fa-bomb"></i>');
}

// Function that is called when we want to reveal a space. Should only initially be called on clear, unflagged, and unclicked spaces
function revealSpace(tempSpace) {
    if (!(tempSpace).hasClass('hidden')) return; // Recursive calls might actually pass along a clicked space, so we return if that is the case
    // We decrement the spaces needed to be clicked, if it goes to zero, the game is won
    spacesNeeded--;
    if (spacesNeeded == 0) winGame();    
    // Mark the space as clicked
    tempSpace.attr('class', 'space clicked');
    // If the surrounding mine count is > 0, we return, otherwise we click the surrouding spaces
    let surrounding = parseInt(tempSpace.attr('data-surrounding'), 10); 
    tempSpace.text(surrounding);
    if (surrounding != 0) return;
    // In the case that we do have 0 surrounding spaces, we recursively call the reveal space function on all surrounding spaces
    let r = parseInt(tempSpace.attr('data-row'), 10);
    let c = parseInt(tempSpace.attr('data-col'), 10);
    if (surrounding == 0) {
        for (let x=-1; x <= 1; x++) {
            for (let y=-1; y <= 1; y++) {
                let cc = c+x;
                let rr = r+y;
                if ((cc>=0 && rr>=0 && cc<columns && rr<rows) && !(x==0 & y==0)) {
                    revealSpace(getDiv(rr,cc));
                } 
            }
        }
        return;
    }
}

function loseGame() {
    clearInterval(timerInt);
    revealBoard();
    $('#status').text("You Lose");
    $('.hidden').off('click');
}

function winGame() {
    clearInterval(timerInt);
    let temp = timer;
    for (let i=0; i < highScoreSize; i++) {
        if (typeof highScores[i] != 'undefined') {
            if (temp < highScores[i]) {
                let temp2 = highScores[i];
                highScores[i] = temp;                
                let tempTD = $('#'+i);
                tempTD.attr('id', '');
                $(tempTD).before('<tr id="'+i+'"><td>'+rows*columns+'</td><td>'+mines+'</td><td>'+temp+'</td></tr>');
                tempTD.remove();
                temp = temp2;
            }
        } else {
            $('#highScores').append('<tr id="'+i+'"><td>'+rows*columns+'</td><td>'+mines+'</td><td>'+temp+'</td></tr>');
            highScores[i] = temp;
            break;
        }
    }
    $('#status').text("You Win");
    revealBoard();
}

function startTimer() {
        timerInt = setInterval(function myTimer() {
            timer++;
            $('#timer').text(timer);
        }, 1000);
}

