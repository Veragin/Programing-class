export class ChessPiece {
    constructor(public player: TPlayer) {}

    move(board: TBoard, myPos: TPos): TPos[] {
        throw new Error("Not implemented");
    }
}
