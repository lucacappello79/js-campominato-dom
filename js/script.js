const gridContainerEl = document.getElementById("grid-container");
const startButtonEl = document.getElementById("start");
//const cellTotal = 100;
let difficultyEl = document.getElementById("difficulty")
//let newCellEl;
//let bombs = [];
//let clearedCells = 0;
//let score = 0
//let playOn = true

gridContainerEl.style.display = "none";

startButtonEl.addEventListener("click", function(){

    let bombs = [];
    let clearedCells = 0;
    let score = 0;
    let playOn = true;
  
    let cells = document.querySelectorAll(".cella");

    for (let i = 0; i < cells.length; i++) {

      cells[i].remove();

    }

    gridContainerEl.style.display = "flex";

    let difficulty = difficultyEl.value;

    let cellTotal;

    if (difficulty === "Normal") {

        cellTotal = 100;

        gridContainerEl.style.width = "calc(60px * 10)";

    } else if (difficulty === "Hard") {

        cellTotal = 81;

        gridContainerEl.style.width = "calc(60px * 9)";

    } else if (difficulty === "Champion") {

        cellTotal = 49;
        
        gridContainerEl.style.width = "calc(60px * 7)";

    }

    bombs = generateBombs(cellTotal);

        for (let i = 1; i < cellTotal + 1; i++) {

            let newCellEl = generateCell(i);
        
            newCellEl.addEventListener("click", function(){

                if (!playOn) {
                    return;
                }

                if (!bombs.includes(i)) {

                    newCellEl.classList.toggle("blue");

                    clearedCells++;
                    score++;

                } else {

                    newCellEl.style.backgroundColor = "red";

                    alert("Game over! Your score is " + score);

                    playOn = false;

                }

                if (clearedCells == cellTotal - bombs.length) {

                    alert("You Won with a score of " + score);

                } 
            
            });

            gridContainerEl.append(newCellEl);

    }

});



function generateCell(number) {

    let cell = document.createElement("div");

    cell.classList.add("cella");

    cell.textContent = number;
    
    return cell;

}

function generateBombs(cellTotal) {

    let bombs = [];

    while (bombs.length < 16) {

        let bomb = Math.floor(Math.random() * cellTotal) + 1;

        if (!bombs.includes(bomb)) {

            bombs.push(bomb);

        }

    }

    return bombs;
}

