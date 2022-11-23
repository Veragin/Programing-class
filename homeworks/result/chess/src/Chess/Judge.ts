import { Board } from "./Board";
import { BOARD_SIZE } from "./Const";
import { MultiplesdameKingsError, NoKingsError } from "./errors";
import { King } from "./Pieces/King";
import { Pos } from "./Pos";
import { oppositePlayer } from "./utils";

export class Judge {
    constructor(private board: Board) {}

    isKingInDanger = (player: TPlayer): boolean => {
        const pos = this.findTheKingPos(player);
        return this.isSomePieceAttackingPos(pos, oppositePlayer(player));
    };

    private findTheKingPos = (player: TPlayer) => {
        let pos: Pos | null = null;

        for (let i = 0; i < BOARD_SIZE; i++) {
            for (let j = 0; j < BOARD_SIZE; j++) {
                const pieceOnTile = this.board.board[i][j];
                if (pieceOnTile instanceof King && pieceOnTile.player === player) {
                    if (pos !== null) {
                        throw new MultiplesdameKingsError();
                    }

                    pos = new Pos({ i, j });
                }
            }
        }

        if (pos === null) {
            throw new NoKingsError();
        }

        return pos;
    };

    private isSomePieceAttackingPos = (pos: Pos, player: TPlayer) => {
        for (let i = 0; i < BOARD_SIZE; i++) {
            for (let j = 0; j < BOARD_SIZE; j++) {
                const piece = this.board.board[i][j];
                if (piece !== null && piece.player === player) {
                    const tilesWhereCanPieceMove = piece.move(this.board.board);
                    if (tilesWhereCanPieceMove.some((p) => p.isEqual(pos))) {
                        return true;
                    }
                }
            }
        }

        return false;
    };
}
