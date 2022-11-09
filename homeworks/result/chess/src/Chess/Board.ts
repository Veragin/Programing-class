import { BOARD_SIZE } from "./Const";
import { ChessPiece } from "./Pieces/ChessPiece";
import { Pos } from "./Pos";

export class Board {
    board: TBoard = [];

    constructor() {
        for (let i = 0; i < BOARD_SIZE; i++) {
            this.board.push([]);
            for (let j = 0; j < BOARD_SIZE; j++) {
                this.board[i].push(null);
            }
        }
    }

    set(piece: ChessPiece, pos: Pos) {
        try {
            const { i, j } = piece.findMyPosInBoard(this.board);
            this.board[i][j] = null;
        } catch {}

        this.board[pos.i][pos.j] = piece;
    }
}
