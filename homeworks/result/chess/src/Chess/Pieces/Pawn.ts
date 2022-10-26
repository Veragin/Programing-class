import { index2Pos, pos2Index } from "../utils";
import { ChessPiece } from "./ChessPiece";

export class Pawn extends ChessPiece {
    move(board: TBoard, myPos: TPos) {
        const { i, j } = pos2Index(myPos);
        const newI = this.player === "black" ? i - 1 : i + 1;

        const res: TPos[] = [];

        if (board[newI][j] === null) {
            res.push(index2Pos({ i: newI, j }));
        }

        let p = board[newI][j - 1];
        if (p instanceof ChessPiece && p.player !== this.player) {
            res.push(index2Pos({ i: newI, j: j - 1 }));
        }

        p = board[newI][j + 1];
        if (p instanceof ChessPiece && p.player !== this.player) {
            res.push(index2Pos({ i: newI, j: j + 1 }));
        }

        return res;
    }
}
