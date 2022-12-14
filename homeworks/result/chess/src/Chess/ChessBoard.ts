import { action, makeObservable, observable } from "mobx";
import { Board } from "./Board";
import { King } from "./Pieces/King";
import { Pawn } from "./Pieces/Pawn";
import { Pos } from "./Pos";

export class ChessBoard {
    board = new Board();

    constructor() {
        makeObservable(this.board, {
            board: observable,
            set: action,
        });

        this.board.set(new King("white"), new Pos({ i: 0, j: 0 }));
        this.board.set(new Pawn("black"), new Pos({ i: 2, j: 2 }));
        this.board.set(new King("black"), new Pos({ i: 5, j: 2 }));
    }
}
