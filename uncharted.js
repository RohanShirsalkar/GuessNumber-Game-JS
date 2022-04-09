'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

let highScore = 0;

let defaultScore = 20;
let defaultHeading = 'Guess My Number!';
let defaultNumber = '?';
let defaultGuessvalue = '';




const displayScreen = function (message) {

    document.querySelector('.screen').textContent = message;

}

const displayBackground = function (color) {
    
    document.querySelector('.labelDisplay').style.backgroundColor = color;
    
}

const displaydisplay = function (message) {

    document.querySelector('.display').textContent = message;
    
}

const displayScore = function (score) {

    document.querySelector('.score').textContent = score;
}





document.querySelector('.check').addEventListener('click', function () {

    let x = Number(document.querySelector('.guess').value);
    console.log(x, typeof x);

    let score = Number(document.querySelector('.score').textContent);
    console.log(score, typeof score);

    // document.querySelector('.guess').value = '';

    if (score !== 0) {

        // condition check

        if (!x) {

            displayScreen('❗ Not a number ❗ ')


        } else if (x === randomNumber) {

            displayScreen('🎉You Win!!🎉')

            displayBackground( 'rgb(60, 233, 54)')

            document.querySelector('body').style.background = 'linear-gradient(rgb(109, 235, 105), rgb(10, 218, 255)'


        } else if ((x < randomNumber + 4) && (x > randomNumber)) {

            displayScreen('High but Close!')

            displaydisplay('😃'
            )

            displayBackground('rgb(255, 238, 0)'
            )

            displayScore(score - 1)



        } else if ((x > randomNumber - 4) && (x < randomNumber)) {

            displayScreen('🔻Low but Close!🔻')

            displayBackground('rgb(255, 238, 0)')

            displaydisplay('😃')

            displayScore(score -1)


        } else if (x > randomNumber) {

            displayScreen('🔼 Too High 🔼')

            displayScore(score-1)

            displayBackground('rgb(247, 72, 72)'
            )

            displaydisplay('🙄')


        } else if (x < randomNumber) {

            displayScreen('🔻 Too Low 🔻')

            displayScore(score-1)

            displayBackground('rgb(247, 72, 72)')

            displaydisplay('🙄')

        }


        // Highscore


        if (x === randomNumber) {

            if (score > highScore) {

                highScore = score;
            };

            displaydisplay('🤩')

            document.querySelector('.highscore').textContent = highScore;

        };



    } else if (score === 0) {

        displaydisplay('🤣')

        displayScreen('You Loose!!')

    }
})

// Reset

document.querySelector('.reset').addEventListener('click', function () {

    randomNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(randomNumber);

    displayScreen('Guess My Number!')
    displayScore(20)
    displaydisplay('❔')

    document.querySelector('.guess').value = '';

    displayBackground('rgb(255, 255, 255)');

    document.querySelector('body').style.background = 'linear-gradient(rgb(124, 124, 255), rgb(255, 80, 80))'


})