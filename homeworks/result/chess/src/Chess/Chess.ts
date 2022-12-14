import { ChessBoard } from "./ChessBoard";
import { ChessController } from "./ChessController";
import { Judge } from "./Judge";
import { Pos } from "./Pos";

export class Chess {
    private chessBoard: ChessBoard;
    private judge: Judge;
    private controller: ChessController;

    constructor() {
        this.chessBoard = new ChessBoard();
        this.judge = new Judge();
        this.controller = new ChessController(this.chessBoard.board, this.judge);
    }

    getBoard = () => this.chessBoard.board.export();

    getMovesOfPiece = (pos: Pos) => {
        return this.judge.getMovesOfPiece(pos, this.chessBoard.board);
    };

    moveFromToPos = (from: Pos, to: Pos) => this.controller.move(from, to);
}
