import { Board } from "./Board";
import { BOARD_SIZE } from "./Const";
import { MultiplesdameKingsError, NoKingsError } from "./errors";
import { King } from "./Pieces/King";
import { Pos } from "./Pos";
import { oppositePlayer } from "./utils";

export class Judge {
    getMovesOfPiece = (pos: Pos, board: Board) => {
        const piece = board.get(pos);
        if (piece === null) return [];

        const res: Pos[] = [];

        const tiles = piece.move(board.board);
        for (let tile of tiles) {
            const temporaryBoard = board.copy();
            temporaryBoard.set(piece, tile);

            if (!this.isKingInDanger(piece.player, temporaryBoard.board)) {
                res.push(tile);
            }
        }

        return res;
    };

    isKingInDanger = (player: TPlayer, board: TBoard): boolean => {
        const pos = this.findTheKingPos(player, board);
        return this.isSomePieceAttackingPos(pos, oppositePlayer(player), board);
    };

    private findTheKingPos = (player: TPlayer, board: TBoard) => {
        let pos: Pos | null = null;

        for (let i = 0; i < BOARD_SIZE; i++) {
            for (let j = 0; j < BOARD_SIZE; j++) {
                const pieceOnTile = board[i][j];
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

    private isSomePieceAttackingPos = (pos: Pos, player: TPlayer, board: TBoard) => {
        for (let i = 0; i < BOARD_SIZE; i++) {
            for (let j = 0; j < BOARD_SIZE; j++) {
                const piece = board[i][j];
                if (piece !== null && piece.player === player) {
                    const tilesWhereCanPieceMove = piece.move(board);
                    if (tilesWhereCanPieceMove.some((p) => p.isEqual(pos))) {
                        return true;
                    }
                }
            }
        }

        return false;
    };
}
