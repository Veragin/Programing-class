import { BOARD_SIZE } from "./Const";

export const assert = (condition: boolean, msg: string) => {
    if (!condition) throw new Error(msg);
};

export const isOnBoard = (i: number) => i >= 0 && i < BOARD_SIZE - 1;

export const oppositePlayer = (player: TPlayer): TPlayer =>
    player === "black" ? "white" : "black";
