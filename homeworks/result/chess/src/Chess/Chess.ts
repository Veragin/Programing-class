import { Board } from "./Board";
import { ChessController } from "./ChessController";
import { Judge } from "./Judge";
import { King } from "./Pieces/King";
import { Pos } from "./Pos";

export class Chess {
    private board: Board;
    private judge: Judge;
    private controller: ChessController;

    constructor() {
        this.board = new Board();
        this.judge = new Judge();
        this.controller = new ChessController(this.board, this.judge);

        this.board.set(new King("white"), new Pos({ i: 0, j: 0 }));
    }

    getBoard = () => this.board.export();

    getMovesOfPiece = (pos: Pos) => {
        return this.judge.getMovesOfPiece(pos, this.board);
    };

    moveFromToPos = (from: Pos, to: Pos) => this.controller.move(from, to);
}
