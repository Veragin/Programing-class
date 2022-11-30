import { Board } from "./Board";
import { Judge } from "./Judge";

export class Chess {
    private board: Board;
    private judge: Judge;

    constructor() {
        this.board = new Board();
        this.judge = new Judge();
    }

    getBoard = () => this.board.export();
}
