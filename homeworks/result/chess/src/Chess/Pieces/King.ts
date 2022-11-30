import { Pos } from "../Pos";
import { isOnBoard } from "../utils";
import { ChessPiece } from "./ChessPiece";

export class King extends ChessPiece {
    readonly type: TPieceType = "king";

    move(board: TBoard): Pos[] {
        const res: Pos[] = [];
        const { i, j } = this.findMyPosInBoard(board);

        for (let oi = i - 1; oi < i + 2; oi++) {
            for (let oj = j - 1; oj < j + 2; oj++) {
                if ((oi === i && oj === j) || !isOnBoard(oi) || !isOnBoard(oj)) {
                    continue;
                }

                const p = board[oi][oj];
                if (p instanceof ChessPiece && p.player === this.player) {
                    continue;
                }

                res.push(new Pos({ i: oi, j: oj }));
            }
        }

        return res;
    }
}
