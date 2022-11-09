import { Board } from "../Board";
import { Pos } from "../Pos";
import { King } from "./King";
import { Pawn } from "./Pawn";

const createData = () => {
    const board = new Board();
    const king = new King("white");
    const pos = new Pos({ x: 2, y: "B" });

    board.set(king, pos);

    return {
        board: board,
        king,
        pos,
    };
};

describe("King", () => {
    it("can move", () => {
        const { board, king, pos } = createData();

        board.set(new Pawn("black"), new Pos({ i: pos.i + 1, j: pos.j + 1 }));

        const res = king.move(board.board);
        expect(res.length).toBe(8);

        const exp = res.map((pos) => pos.export());
        expect(exp).toMatchSnapshot();
    });

    it("cannt move if is blocked by figure", () => {
        const { board, king } = createData();
        board.set(king, new Pos({ i: 0, j: 0 }));

        const res1 = king.move(board.board);
        expect(res1.length).toBe(3);
    });
});

export {};
