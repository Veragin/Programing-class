import bishopBlack from "../Assets/bishopBlack.png";
import bishopWhite from "../Assets/bishopWhite.png";
import kingBlack from "../Assets/kingBlack.png";
import kingWhite from "../Assets/kingWhite.png";
import pawnBlack from "../Assets/pawnBlack.png";
import pawnWhite from "../Assets/pawnWhite.png";
import queenBlack from "../Assets/queenBlack.png";
import queenWhite from "../Assets/queenWhite.png";
import rookBlack from "../Assets/rookBlack.png";
import rookWhite from "../Assets/rookWhite.png";
import knightBlack from "../Assets/knightBlack.png";
import knightWhite from "../Assets/knightWhite.png";

export const getPieceImage = (tile: TBoardTileExport) => {
    if (tile === null) return null;

    if (tile.player === "black") {
        switch (tile.piece) {
            case "bishop":
                return bishopBlack;
            case "king":
                return kingBlack;
            case "knight":
                return knightBlack;
            case "queen":
                return queenBlack;
            case "rook":
                return rookBlack;
            default:
                return pawnBlack;
        }
    }

    switch (tile.piece) {
        case "bishop":
            return bishopWhite;
        case "king":
            return kingWhite;
        case "knight":
            return knightWhite;
        case "queen":
            return queenWhite;
        case "rook":
            return rookWhite;
        default:
            return pawnWhite;
    }
};
