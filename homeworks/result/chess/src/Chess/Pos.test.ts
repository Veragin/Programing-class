import { Pos } from "./Pos";

const createPos = () => new Pos({ i: 2, j: 5 });

describe("Pos", () => {
    it("can get indexes", () => {
        const pos = createPos();

        expect(pos.i).toBe(2);
        expect(pos.j).toBe(5);
    });

    it("can get pos", () => {
        const pos = createPos();

        expect(pos.x).toBe(3);
        expect(pos.y).toBe("F");
    });

    it("can set indexes", () => {
        const pos = createPos();

        pos.i = 0;
        pos.j = 0;

        expect(pos.i).toBe(0);
        expect(pos.j).toBe(0);
        expect(pos.x).toBe(1);
        expect(pos.y).toBe("A");
    });

    it("can set pos", () => {
        const pos = createPos();

        pos.x = 5;
        pos.y = "H";

        expect(pos.i).toBe(4);
        expect(pos.j).toBe(7);
        expect(pos.x).toBe(5);
        expect(pos.y).toBe("H");
    });

    it("can compare by isEqual", () => {
        const pos1 = createPos();
        const pos2 = createPos();

        expect(pos1.isEqual(pos2)).toBe(true);

        const pos3 = new Pos({ i: 1, j: 5 });
        expect(pos1.isEqual(pos3)).toBe(false);
    });
});

export {};
