import { BOARD_SIZE } from "../Const";
import { Pos } from "../Pos";

export class ChessPiece {
    constructor(public player: TPlayer) {}

    move(board: TBoard): Pos[] {
        throw new Error("Not implemented");
    }

    findMyPosInBoard = (board: TBoard) => {
        for (let i = 0; i < BOARD_SIZE; i++) {
            for (let j = 0; j < BOARD_SIZE; j++) {
                if (board[i][j] === this) {
                    return new Pos({ i, j });
                }
            }
        }

        throw new Error("Piece is not on the board");
    };
}
