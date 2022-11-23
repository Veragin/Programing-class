import { Board } from "../Board";
import { Pos } from "../Pos";
import { Bishop } from "./Bishop";
import { Pawn } from "./Pawn";

const createData = () => {
    const board = new Board();
    const bishop = new Bishop("white");
    const pos = new Pos({ x: 2, y: "B" });

    board.set(bishop, pos);

    return {
        board: board,
        bishop,
        pos,
    };
};

describe("Bishop", () => {
    it("can move", () => {
        const { board, bishop, pos } = createData();

        board.set(new Pawn("black"), new Pos({ i: pos.i + 2, j: pos.j + 2 }));

        const res = bishop.move(board.board);
        expect(res.length).toBe(5);

        const exp = res.map((pos) => pos.export());
        expect(exp).toMatchSnapshot();
    });

    it("cannt move if is blocked by figure", () => {
        const { board, bishop } = createData();
        board.set(bishop, new Pos({ x: 1, y: "H" }));

        board.set(new Pawn("white"), new Pos({ x: 6, y: "C" }));

        const res = bishop.move(board.board);
        expect(res.length).toBe(4);
    });
});

export {};
