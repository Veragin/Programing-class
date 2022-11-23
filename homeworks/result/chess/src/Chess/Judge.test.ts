import { Board } from "./Board";
import { Pos } from "./Pos";
import { King } from "./Pieces/King";
import { Judge } from "./Judge";
import { TestFailedError } from "./errors";
import { Bishop } from "./Pieces/Bishop";
import { MultiplesdameKingsError } from "./errors";
import { Pawn } from "./Pieces/Pawn";

const createData = () => {
    const board = new Board();
    const judge = new Judge(board);
    const king = new King("white");
    const pos = new Pos({ x: 3, y: "B" });
    board.set(king, pos);

    return {
        board,
        judge,
        king,
        pos,
    };
};

describe("Judge", () => {
    it("can handle empty board", () => {
        const { judge } = createData();

        const res = judge.isKingInDanger("white");
        expect(res).toBe(false);
    });

    it("can handle two kings on board", () => {
        const { judge, board } = createData();
        board.set(new King("white"), new Pos({ x: 4, y: "D" }));

        try {
            judge.isKingInDanger("white");
            throw new TestFailedError();
        } catch (e) {
            if (e instanceof MultiplesdameKingsError) {
                return;
            }

            throw e;
        }
    });

    it("bishop can attack the king", () => {
        const { judge, board, pos } = createData();
        board.set(new Bishop("black"), new Pos({ i: pos.i + 4, j: pos.j + 4 }));

        let res = judge.isKingInDanger("white");
        expect(res).toBe(true);

        board.set(new Pawn("black"), new Pos({ i: pos.i + 3, j: pos.j + 3 }));
        res = judge.isKingInDanger("white");
        expect(res).toBe(false);

        board.set(new Pawn("white"), new Pos({ i: pos.i + 3, j: pos.j + 3 }));
        res = judge.isKingInDanger("white");
        expect(res).toBe(false);
    });
});

export {};
