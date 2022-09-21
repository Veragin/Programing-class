const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class SudokuSolver {
    data = []; //{value: number, isFixed: boolean}[][]
    outputSudoku = null;

    solve = (inputSudoku, outputSudoku) => {
        this.outputSudoku = outputSudoku;

        this.load(inputSudoku);
        if (!this.areDataValid()) {
            throw new InvalidInputError();
        }

        try {
            this.solveStep(0, 0);
        } catch (e) {
            if (!(e instanceof EndError)) {
                throw e;
            }
        }

        this.setDataToOutput();
    };

    solveStep = async (i, j) => {
        if (this.data[i][j].isFixed) {
            return this.solveStep(...nextIndexes(i, j));
        }

        if (this.data[i][j].value === 9) {
            this.data[i][j].value = null;
            return false;
        }

        if (this.data[i][j].value === null) {
            this.data[i][j].value = 1;
        } else {
            this.data[i][j].value++;
        }

        if (this.areDataValid()) {
            await this.solveStep(...nextIndexes(i, j));
        }

        return this.solveStep(i, j);
    };

    load = (inputSudoku) => {
        for (let i = 0; i < SIZE; i++) {
            const d = inputSudoku.data[i];
            const newRow = [];
            this.data.push(newRow);

            for (let j = 0; j < SIZE; j++) {
                const value = d[j];
                const isFixed = value !== null;
                newRow.push({ value, isFixed });

                if (isFixed) {
                    this.outputSudoku.elements[i][j].classList.add("red");
                } else {
                    this.outputSudoku.elements[i][j].classList.remove("red");
                }
            }
        }
    };

    areDataValid = () => {
        for (let i = 0; i < SIZE; i++) {
            for (let j = 0; j < SIZE; j++) {
                if (this.data[i][j].value === null) {
                    continue;
                }

                // control row
                for (let k = 0; k < SIZE; k++) {
                    if (k === j) continue;
                    if (this.data[i][j].value === this.data[i][k].value) {
                        /* console.log(
                            `found ROW problem in [${i}, ${j}] with [${i}, ${k}] with number ${this.data[i][j].value}`
                        );*/
                        return false;
                    }
                }

                // control column
                for (let k = 0; k < SIZE; k++) {
                    if (k === i) continue;
                    if (this.data[i][j].value === this.data[k][j].value) {
                        /*console.log(
                            `found COLUMN problem in [${i}, ${j}] with [${k}, ${j}] with number ${this.data[i][j].value}`
                        );*/
                        return false;
                    }
                }

                const top = Math.floor(i / 3) * 3;
                const left = Math.floor(j / 3) * 3;
                // control rectangle
                for (let k = top; k < top + 3; k++) {
                    for (let l = left; l < left + 3; l++) {
                        if (k === i && l === j) continue;
                        if (this.data[i][j].value === this.data[k][l].value) {
                            /*console.log(
                                `found RECTANGLE problem in [${i}, ${j}] with [${k}, ${l}] with number ${this.data[i][j].value}`
                            );*/
                            return false;
                        }
                    }
                }
            }
        }

        return true;
    };

    setDataToOutput = () => {
        if (this.outputSudoku === null) return;

        for (let i = 0; i < SIZE; i++) {
            for (let j = 0; j < SIZE; j++) {
                this.outputSudoku.set(i, j, this.data[i][j].value);
            }
        }
    };
}

const nextIndexes = (i, j) => {
    const newJ = j + 1 >= SIZE ? 0 : j + 1;
    const newI = j + 1 === newJ ? i : i + 1;

    if (newI >= SIZE) {
        throw new EndError();
    }

    return [newI, newJ];
};
