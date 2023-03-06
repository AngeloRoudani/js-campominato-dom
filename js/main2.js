
const buttonPlay = document.querySelector('.btn');
let gridDomEasy = document.querySelector('.grid_easy');
let gridDomHard = document.querySelector('.grid_hard');
let gridVeryHard = document.querySelector('.grid_very');


/*let easySquare = squareEasy();
console.log(easySquare);
let hardSquare = squareHard();
let verySquare = squareVeryHard();

squareGeneratorGrid(gridDomEasy, 1, 100, easySquare);
squareGeneratorGrid(gridDomHard, 1, 81, hardSquare);
squareGeneratorGrid(gridVeryHard, 1, 49, verySquare);
*/

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

pointViewer.innerHTML = `il tuo punteggio è di: ${yourPoint}`;



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
                yourPoint++;
                pointViewer.innerHTML = `il tuo punteggio è di: ${yourPoint}`;
            }
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



/*function squareGeneratorGrid (gridDomPlace, min, max, squareFunction) {

    let i = min;
    
    while ( i <= max) {
        let squareCell = squareFunction;
        squareCell.innerHTML =`<div class="number">${i}</div>`;
        squareCell.addEventListener('click', 
            function() {
                this.classList.toggle('bg-yellow');
            }
        );
        gridDomPlace.append(squareCell);
        i++;
        
    }
}*/

