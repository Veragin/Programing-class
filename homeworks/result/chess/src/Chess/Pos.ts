import { assert } from "./utils";

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

    set x(x: TX) {
        this._i = x - 1;
    }
    set y(y: TY) {
        this._j = letters.indexOf(y);
    }
    set i(i: number) {
        assert(i >= 0 && i < 8, `${i} is out of index range`);
        this._i = i;
    }
    set j(j: number) {
        assert(j >= 0 && j < 8, `${j} is out of index range`);
        this._j = j;
    }

    isEqual(pos: Pos) {
        return this.i === pos.i && this.j === pos.j;
    }

    export() {
        return [this._i, this._j];
    }
}
