//initialisation de jQuery
$(function($){
    
    const newGameBtn = $('#new_game_btn');
    const rollBtn = $('#roll_btn');
    const holdBtn = $('#hold_btn');

    const p1GlobalScore = $('#p1_global_score');
    const p2GlobalScore = $('#p2_global_score');

    const p1CurrentScore = $('#p1_current_score');
    const p2CurrentScore = $('#p2_current_score');

    const diceDisplay = $('.dice')

    let p1Turn = true


    function updateTurnDisplay() {
        if(p1Turn) {
            $("#player1").addClass('current_player');
            $("#player2").removeClass('current_player');
        } else {
            $("#player2").addClass('current_player');
            $("#player1").removeClass('current_player');
        }
    }


    newGameBtn.click(() => {
        p1GlobalScore.html("0");
        p2GlobalScore.html("0");
        p1CurrentScore.html("0");
        p2CurrentScore.html("0");
        p1Turn = true;
        updateTurnDisplay()
    })

    rollBtn.click(() => {
        const number = Math.floor(Math.random() * 6) + 1;
        diceDisplay.attr('src', `./img/${number}.PNG`);
        if(number === 1) {
            p1Turn ? p1CurrentScore.html('0'): p2CurrentScore.html('0');
            p1Turn = !p1Turn;
        } else {
            if(p1Turn) {
                p1CurrentScore.html(number + Number(p1CurrentScore.html()))
                
            } else {
                p2CurrentScore.html(number + Number(p2CurrentScore.html()))
            }
        }
        updateTurnDisplay()
    })

    holdBtn.click(() => {
        if(p1Turn) {
            p1GlobalScore.html(parseInt(p1CurrentScore.html()) + parseInt(p1GlobalScore.html()))
        } else {
            p2GlobalScore.html(parseInt(p2CurrentScore.html()) + parseInt(p2GlobalScore.html()))
        }
        p1Turn = !p1Turn;
        updateTurnDisplay()
    })

    updateTurnDisplay()
})