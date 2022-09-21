const SIZE = 9;

class Sudoku {
    data = []; // (number | null)[][]
    elements = []; // HTMLInputElement[][]
    root = document.createElement("div"); // HTMLDivElement

    constructor() {
        this.root.classList.add("sudoku");

        for (let i = 0; i < SIZE; i++) {
            const dataRow = [];
            this.data.push(dataRow);

            const elementRow = [];
            this.elements.push(elementRow);
            for (let j = 0; j < SIZE; j++) {
                dataRow.push(null);

                const input = document.createElement("input");
                input.type = "number";
                input.min = 1;
                input.max = 9;
                input.classList.add("sudokuCell");
                input.addEventListener("change", (e) => {
                    let value =
                        e.target.value === "" ? null : parseInt(e.target.value);

                    if (value !== null && (value > 9 || value < 1)) {
                        value = null;
                        e.target.value = "";
                    }
                    this.data[i][j] = value;
                });

                elementRow.push(input);
                this.root.append(input);
            }
        }
    }

    renderTo = (containerElement) => {
        containerElement.append(this.root);
    };

    set = (i, j, value) => {
        this.data[i][j] = value ?? null;
        this.elements[i][j].value = value ?? "";
    };

    load = (data) => {};
}
