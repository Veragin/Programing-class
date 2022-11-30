import { Pos } from "../Pos";
import { isOnBoard } from "../utils";
import { ChessPiece } from "./ChessPiece";

export class DirectionChessPiece extends ChessPiece {
    protected moveToDirection(board: TBoard, signs: { i: number; j: number }[]): Pos[] {
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
