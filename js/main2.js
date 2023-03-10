
const buttonPlay = document.querySelector('.btn');
let gridDomEasy = document.querySelector('.grid_easy');
let gridDomHard = document.querySelector('.grid_hard');
let gridVeryHard = document.querySelector('.grid_very');


// AVVIO GIOCO DAL BUTTON IN TRE MODALITA

buttonPlay.addEventListener('click', 
    
    function() {
        let battleMode = document.getElementById('mode').value;

        if (battleMode == "easy") {
            yourPoint = 0;
            gridVeryHard.classList.add('hidden');
            gridDomEasy.classList.remove('hidden');
            gridDomHard.classList.add('hidden');

        } else if (battleMode == "hard") {
            yourPoint = 0;
            gridDomEasy.classList.add('hidden');
            gridVeryHard.classList.add('hidden');
            gridDomHard.classList.remove('hidden');

        } else if (battleMode == "very_hard"){
            yourPoint = 0;
            gridDomEasy.classList.add('hidden');
            gridDomHard.classList.add('hidden');
            gridVeryHard.classList.remove('hidden');

        }
    }
)
//GENERAZIONE PUNTEGGIO

let pointViewer = document.getElementById('point_set');

let yourPoint = 0;

pointViewer.innerHTML = `Il tuo punteggio è di: ${yourPoint}`;



//CREAZIONE GRIGLIE IN TRE MODALITà

// Griglia Facile
const bomblistArrayEasy = [];

for ( i = 1; i <= 16; i++) {
        
    let numberbomb = uniqueBombNumber(bomblistArrayEasy, 1 , 100);
    bomblistArrayEasy.push(numberbomb);
}

for (let i = 1; i <= 100; i++) {
    const easySquare = squareEasy();
    easySquare.append([i]);
    easySquare.addEventListener('click', 
        function() { 

            if (bomblistArrayEasy.includes(i)) {
                this.classList.add('bg-bomb');
                yourPoint = "Hai perso";
                pointViewer.innerHTML = `${yourPoint}`;
            } else {
                this.classList.add('bg-yellow');
                yourPoint = ++yourPoint;
                pointViewer.innerHTML = `il tuo punteggio è di: ${yourPoint}`;
            }
        }
    );
    buttonPlay.addEventListener('click', function() {
        yourPoint = 0;
        easySquare.classList.remove('bg-yellow');
        easySquare.classList.remove('bg-bomb');

    }
    );
    gridDomEasy.append(easySquare);
}

console.log(bomblistArrayEasy);

//Griglia Difficile

const bomblistArrayHard = [];

for ( i = 1; i <= 16; i++) {
        
    let numberbomb = uniqueBombNumber(bomblistArrayEasy, 1 , 81);
    bomblistArrayHard.push(numberbomb);
}

for (let i = 1; i <= 81; i++) {
    const hardSquare = squareHard();
    hardSquare.append([i]);
    hardSquare.addEventListener('click', 
        function() {
            if (bomblistArrayHard.includes(i)) {
                this.classList.add('bg-bomb');
                yourPoint = "Hai perso";
                pointViewer.innerHTML = `${yourPoint}`;
            } else {
                this.classList.toggle('bg-yellow');
                yourPoint = i++;
                pointViewer.innerHTML = `il tuo punteggio è di: ${yourPoint}`;
            }
        }
    );
    buttonPlay.addEventListener('click', function() {
        yourPoint = 0;
        hardSquare.classList.remove('bg-yellow');
        hardSquare.classList.remove('bg-bomb');

    }
    );
    gridDomHard.append(hardSquare);
}
console.log(bomblistArrayHard);

//Griglia molto Difficile

const bomblistArrayVery = [];

for ( i = 1; i <= 16; i++) {
        
    let numberbomb = uniqueBombNumber(bomblistArrayVery, 1 , 81);
    bomblistArrayVery.push(numberbomb);
}
for (let i = 1; i <= 49; i++) {
    const verySquare = squareVeryHard();
    verySquare.append([i]);
    verySquare.addEventListener('click', 
        function() {
            if (bomblistArrayVery.includes(i)) {
                this.classList.add('bg-bomb');
                yourPoint = "Hai perso";
                pointViewer.innerHTML = `${yourPoint}`;
            } else {
                this.classList.toggle('bg-yellow');
                yourPoint = i++;
                pointViewer.innerHTML = `il tuo punteggio è di: ${yourPoint}`;
            }
        }
    );
    buttonPlay.addEventListener('click', function() {
        yourPoint = 0;
        verySquare.classList.remove('bg-yellow');
        verySquare.classList.remove('bg-bomb');

    }
    );
    gridVeryHard.append(verySquare);
}
console.log(bomblistArrayVery);

// GENERAZIONE QUADRATI 

function squareEasy () {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square_easy');
    return squareElement;

}

function squareHard () {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square_hard');
    return squareElement;

}

function squareVeryHard () {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square_very_hard');
    return squareElement;

}

// GENERAZIONE BOMBE CASUALI

function randomBombGen (min, max) {

    let randomBomb = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomBomb;
}

function uniqueBombNumber (casualArray, min, max) {

    let uniqueBomb = false;
    let numberBomb;

    while (!uniqueBomb) {
        numberBomb = randomBombGen (min, max);
        if (!casualArray.includes(numberBomb)) {
            uniqueBomb = true;
        }
    }
    return numberBomb;
}





