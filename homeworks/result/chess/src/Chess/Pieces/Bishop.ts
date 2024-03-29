import { Pos } from "../Pos";
import { DirectionChessPiece } from "./DirectionChessPiece";

const signs = [
    { i: 1, j: 1 },
    { i: 1, j: -1 },
    { i: -1, j: -1 },
    { i: -1, j: 1 },
];

export class Bishop extends DirectionChessPiece {
    type: TPieceType = "bishop";

    move(board: TBoard): Pos[] {
        return this.moveToDirection(board, signs);
    }
}
