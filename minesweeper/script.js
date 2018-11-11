let rows = 8;
let columns = 8;
let mines = 8;
let mineCount = mines;;
let timer = 0;
var timerInt = null;
let highScore = -1;
let spacesNeeded = rows*columns-mines;

$(document).ready(function() {
    createBoard();    
    $('#create').submit(function(e) {
        e.preventDefault();
        rows = $("input[name=rows]").val();
        columns = $("input[name=columns]").val();
        mines = $("input[name=mines]").val();
        if (mines > rows*columns -1) {
            alert('Mine count must be between 1 and Rows*Columns-1');
        } else {
        createBoard();
        }
    });
    $('#reset').click(function() {
        createBoard();
    });
    $('#test').click(function() {
        clearInterval(timerInt);
    });
});

function createBoard(e) {
    clearInterval(timerInt);
    timerInt = null;
    timer = 0;
    $('#timer').text(timer);
    spacesNeeded = rows*columns-mines;
    $('#board').empty();
    $('#status').empty();
    mineCount = mines;
    $('#mineCount').text(mineCount);
    for (i=0; i < rows; i++) {
        for (j=0; j < columns; j++) {
            let y = '<div class="space hidden" data-surrounding="0" data-row="'+i+'" data-col="'+j+'"></div>';
            $('#board').append(y);
            }
        $('#board').append('<br>');
    }

    for (i=0; i < mines;) {
        let r = Math.floor((Math.random()*rows));
        let c = Math.floor((Math.random()*columns));
        let bomb = getDiv(r,c);
        if (!$(bomb).hasClass("bomb")) {
            i++;
            $(bomb).addClass("bomb");  
            for (x=-1; x <= 1; x++) {
                for (y=-1; y <= 1; y++) {
                    let cc = c+x;
                    let rr = r+y;
                    if ((cc>=0 && rr>=0 && cc<columns && rr<rows) && !(x==0 & y==0)) {
                        let tempSpace = getDiv(rr,cc);
                        let tempSur = tempSpace.attr('data-surrounding')
                        tempSur++;
                        tempSpace.attr('data-surrounding', tempSur);
                    }
                }
            }
        }
    }

    $('.hidden').click(function(e) {
        if (!$(this).hasClass('hidden')) return;
        let space = $(this);
        if (timerInt === null) {
            startTimer();
        }
        if (e.shiftKey) {
            space.toggleClass('flagged');
            mineCount = ((space).hasClass('flagged')) ? mineCount-1:mineCount+1;
            $('#mineCount').text(mineCount);
        } else if (!(space.hasClass('flagged'))){            
           if (space.hasClass('bomb')) {
                loseGame();
            } else if (space.hasClass('hidden')){
                revealSpace(space);
            }
        }
    });
}

function getDiv(rrr,ccc) {
    return $('div[data-row="'+rrr+'"][data-col="'+ccc+'"]');
}


function revealBoard() {
    $('.bomb').append('<i class="fas fa-bomb"></i>');
}

function revealSpace(tempSpace) {
    let surrounding = parseInt(tempSpace.attr('data-surrounding'), 10);
    if (!(tempSpace).hasClass('hidden')) return;
    spacesNeeded--;
    if (spacesNeeded == 0) winGame();
    let r = parseInt(tempSpace.attr('data-row'), 10);
    let c = parseInt(tempSpace.attr('data-col'), 10);
    tempSpace.text(surrounding);
    tempSpace.attr('class', 'space clicked');
    if (surrounding != 0) return;
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
    if (highScore < 0 || timer < highScore) {
        $('#highScore').text(timer);
        highScore = timer;
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

