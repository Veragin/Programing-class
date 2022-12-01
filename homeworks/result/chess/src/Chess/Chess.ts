import { Board } from "./Board";
import { Judge } from "./Judge";
import { King } from "./Pieces/King";
import { Pos } from "./Pos";

export class Chess {
    private board: Board;
    private judge: Judge;

    constructor() {
        this.board = new Board();
        this.judge = new Judge();

        this.board.set(new King("white"), new Pos({ i: 0, j: 0 }));
    }

    getBoard = () => this.board.export();
}
