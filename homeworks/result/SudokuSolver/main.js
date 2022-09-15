const sudokuInputElement = document.getElementById("inputSudoku");
const sudokuOutputElement = document.getElementById("outputSudoku");
const solveButton = document.getElementById("solveButton");

const sudokuInput = new Sudoku();
sudokuInput.renderTo(sudokuInputElement);

sudokuInput.set(0, 1, 1);
sudokuInput.set(0, 4, 3);
sudokuInput.set(0, 5, 2);
sudokuInput.set(0, 6, 7);
sudokuInput.set(0, 7, 6);
sudokuInput.set(0, 8, 4);
sudokuInput.set(1, 4, 8);
sudokuInput.set(1, 7, 2);

const sudokuOutput = new Sudoku();
sudokuOutput.renderTo(sudokuOutputElement);

solveButton.addEventListener("click", () => {
    const solver = new SudokuSolver();
    solver.solve(sudokuInput, sudokuOutput);
});
