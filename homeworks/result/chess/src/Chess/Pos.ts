export const letters = ["A", "B", "C", "D", "E", "F", "G", "H"] as TY[];

type TPos = { x: TX; y: TY };
type TIndex = { i: number; j: number };

export class Pos {
    private _i: number;
    private _j: number;

    constructor(input: TPos | TIndex) {
        const inp = input as any;
        if (inp.x !== undefined) {
            this._i = inp.x - 1;
            this._j = letters.indexOf(inp.y);
        } else {
            this._i = inp.i;
            this._j = inp.j;
        }
    }

    get x() {
        return (this._i + 1) as TX;
    }
    get y() {
        return letters[this._j];
    }
    get i() {
        return this._i;
    }
    get j() {
        return this._j;
    }

    isEqual(pos: Pos) {
        return this.i === pos.i && this.j === pos.j;
    }

    export() {
        return [this._i, this._j];
    }
}
