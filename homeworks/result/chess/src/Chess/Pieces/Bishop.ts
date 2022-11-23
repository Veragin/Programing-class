import { Pos } from "../Pos";
import { isOnBoard } from "../utils";
import { ChessPiece } from "./ChessPiece";

const signs = [
    { i: 1, j: 1 },
    { i: 1, j: -1 },
    { i: -1, j: -1 },
    { i: -1, j: 1 },
];

export class Bishop extends ChessPiece {
    move(board: TBoard): Pos[] {
        const res: Pos[] = [];
        const { i, j } = this.findMyPosInBoard(board);

        for (let sign of signs) {
            let distance = 1;
            while (true) {
                const testI = i + sign.i * distance;
                const testJ = j + sign.j * distance;

                if (!isOnBoard(testI) || !isOnBoard(testJ)) {
                    break;
                }

                const pieceOnTile = board[testI][testJ];
                if (pieceOnTile === null) {
                    res.push(new Pos({ i: testI, j: testJ }));
                    distance++;
                    continue;
                }

                if (pieceOnTile.player !== this.player) {
                    res.push(new Pos({ i: testI, j: testJ }));
                }

                break;
            }
        }

        return res;
    }
}
