import { Board } from "../Board";
import { Pos } from "../Pos";
import { Pawn } from "./Pawn";

const createData = () => {
    const board = new Board();
    const pawn = new Pawn("white");
    const pos = new Pos({ x: 2, y: "B" });

    board.set(pawn, pos);

    return {
        board: board,
        pawn,
        pos,
    };
};

describe("Pawn", () => {
    it("can move", () => {
        const { board, pawn, pos } = createData();

        board.set(new Pawn("black"), new Pos({ i: pos.i + 1, j: pos.j + 1 }));

        const res = pawn.move(board.board);
        expect(res.length).toBe(2);

        const exp = res.map((pos) => pos.export());
        expect(exp).toMatchSnapshot();
    });

    it("cannt move if is blocked by figure", () => {
        const { board, pawn, pos } = createData();

        board.set(new Pawn("black"), new Pos({ i: pos.i + 1, j: pos.j }));

        const res1 = pawn.move(board.board);
        expect(res1.length).toBe(0);

        board.set(new Pawn("white"), new Pos({ i: pos.i + 1, j: pos.j + 1 }));

        const res2 = pawn.move(board.board);
        expect(res2.length).toBe(0);
    });
});

export {};
