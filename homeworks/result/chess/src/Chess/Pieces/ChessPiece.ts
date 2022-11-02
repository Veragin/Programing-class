import { Pos } from "../Pos";

export class ChessPiece {
    constructor(public player: TPlayer) {}

    move(board: TBoard, myPos: Pos): Pos[] {
        throw new Error("Not implemented");
    }
}
