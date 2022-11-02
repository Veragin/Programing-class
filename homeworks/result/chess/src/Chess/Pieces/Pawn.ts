import { Pos } from "../Pos";
import { ChessPiece } from "./ChessPiece";

export class Pawn extends ChessPiece {
    move(board: TBoard, myPos: Pos) {
        const res: Pos[] = [];
        const i = myPos.i;
        const j = myPos.j;

        const newI = this.player === "black" ? i - 1 : i + 1;

        if (board[newI][j] === null) {
            res.push(new Pos({ i: newI, j }));
        }

        let p = board[newI][j - 1];
        if (p instanceof ChessPiece && p.player !== this.player) {
            res.push(new Pos({ i: newI, j: j - 1 }));
        }

        p = board[newI][j + 1];
        if (p instanceof ChessPiece && p.player !== this.player) {
            res.push(new Pos({ i: newI, j: j + 1 }));
        }

        return res;
    }
}
