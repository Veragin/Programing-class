import { Board } from "../Board";
import { Pos } from "../Pos";
import { Pawn } from "./Pawn";

const createData = () => {
    const board = new Board();
    const pawn = new Pawn("white");
    const pawnPos = new Pos({ x: 2, y: "B" });

    board.board[pawnPos.i][pawnPos.j] = pawn;

    return {
        board: board.board,
        pawn,
        pawnPos,
    };
};

describe("Pawn", () => {
    it("can move", () => {
        const { board, pawn, pawnPos } = createData();

        board[pawnPos.i + 1][pawnPos.j + 1] = new Pawn("black");

        const res = pawn.move(board, pawnPos);
        expect(res.length).toBe(2);

        const exp = res.map((pos) => pos.export());
        expect(exp).toMatchSnapshot();
    });

    it("cannt move if is blocked by figure", () => {
        const { board, pawn, pawnPos } = createData();

        board[pawnPos.i + 1][pawnPos.j] = new Pawn("black");

        const res1 = pawn.move(board, pawnPos);
        expect(res1.length).toBe(0);

        board[pawnPos.i + 1][pawnPos.j] = new Pawn("white");

        const res2 = pawn.move(board, pawnPos);
        expect(res2.length).toBe(0);
    });
});

export {};
