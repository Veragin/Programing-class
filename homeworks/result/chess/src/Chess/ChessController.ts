import { Board } from "./Board";
import { Judge } from "./Judge";
import { Pos } from "./Pos";

export class ChessController {
    constructor(private board: Board, private judge: Judge) {}

    move = (from: Pos, to: Pos) => {
        const piece = this.board.get(from);
        if (piece === null) return;

        const allowedMoves = this.judge.getMovesOfPiece(from, this.board);
        if (allowedMoves.some((p) => p.isEqual(to))) {
            this.board.set(piece, to);
        }
    };
}
