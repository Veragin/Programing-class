declare type TPlayer = "black" | "white";

declare type TBoard = (import("../Chess/Pieces/ChessPiece").ChessPiece | null)[][];

declare type TX = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
declare type TY = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
