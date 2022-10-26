import { BOARD_SIZE } from "./Const";

export class Board {
    board: TBoard = [];

    constructor() {
        for (let i = 0; i < BOARD_SIZE; i++) {
            this.board.push([]);
            for (let j = 0; j < BOARD_SIZE; j++) {
                this.board[i].push(null);
            }
        }
    }
}
