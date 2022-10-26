const letters = ["A", "B", "C", "D", "E", "F", "G", "H"] as TY[];

export const pos2Index = (pos: TPos) => {
    return {
        i: pos[0] - 1,
        j: letters.indexOf(pos[1]),
    };
};

export const index2Pos = ({ i, j }: { i: number; j: number }): TPos => {
    return [(i + 1) as TX, letters[j]];
};
