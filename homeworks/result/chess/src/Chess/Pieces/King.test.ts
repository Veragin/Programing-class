import { Board } from "../Board";
import { Pos } from "../Pos";
import { King } from "./King";
import { Pawn } from "./Pawn";

const createData = () => {
    const board = new Board();
    const king = new King("white");
    const pos = new Pos({ x: 2, y: "B" });

    board.board[pos.i][pos.j] = king;

    return {
        board: board.board,
        king,
        pos,
    };
};

describe("King", () => {
    it("can move", () => {
        const { board, king, pos } = createData();

        board[pos.i + 1][pos.j + 1] = new Pawn("black");

        const res = king.move(board, pos);
        expect(res.length).toBe(8);

        const exp = res.map((pos) => pos.export());
        expect(exp).toMatchSnapshot();
    });

    it("cannt move if is blocked by figure", () => {
        const { board, king, pos } = createData();
        board[pos.i][pos.j] = null;
        pos.i = 0;
        pos.j = 0;
        board[pos.i][pos.j] = king;

        const res1 = king.move(board, pos);
        expect(res1.length).toBe(3);
    });
});

export {};
