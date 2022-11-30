import { Pos } from "../Pos";
import { DirectionChessPiece } from "./DirectionChessPiece";

const signs = [
    { i: 1, j: 0 },
    { i: 0, j: -1 },
    { i: -1, j: 0 },
    { i: 0, j: 1 },
    { i: 1, j: 1 },
    { i: 1, j: -1 },
    { i: -1, j: -1 },
    { i: -1, j: 1 },
];

export class Queen extends DirectionChessPiece {
    readonly type: TPieceType = "queen";

    move(board: TBoard): Pos[] {
        return this.moveToDirection(board, signs);
    }
}
