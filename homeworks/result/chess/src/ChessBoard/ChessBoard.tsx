import { useRef, useState } from "react";
import styled from "styled-components";
import { Chess } from "../Chess/Chess";
import { BOARD_SIZE } from "../Chess/Const";
import { letters, Pos } from "../Chess/Pos";
import { Tile } from "./Tile";

type Props = {
    chess: Chess;
};

export const ChessBoard = ({ chess }: Props) => {
    const board = chess.getBoard();

    const dragOverRef = useRef<Pos | null>(null);
    const [activePos, setActivePos] = useState<Pos | null>(null);
    const indicators = activePos ? chess.getMovesOfPiece(activePos) : [];

    const onTileClick = (pos: Pos) => {
        if (!activePos) {
            setActivePos(pos);
            return;
        }

        chess.moveFromToPos(activePos, pos);
        setActivePos(null);
    };

    return (
        <StyledTable>
            {board.reverse().map((row, i) => (
                <>
                    <SytledYTile key={BOARD_SIZE - i}>{BOARD_SIZE - i}</SytledYTile>

                    {row.map((tileBoardExport, j) => (
                        <Tile
                            key={j}
                            color={(i + j) % 2 ? "black" : "white"}
                            tileBoardExport={tileBoardExport}
                            onClick={() => onTileClick(new Pos({ i: BOARD_SIZE - i - 1, j }))}
                            indicator={indicators.some((p) =>
                                p.isEqual(new Pos({ i: BOARD_SIZE - i - 1, j }))
                            )}
                            onDragEnd={() => {
                                const toPos = dragOverRef.current;
                                if (!activePos || toPos === null) return;

                                chess.moveFromToPos(activePos, toPos);
                                setActivePos(null);
                            }}
                            onDragStart={() => {
                                if (!activePos) {
                                    setActivePos(new Pos({ i: BOARD_SIZE - i - 1, j }));
                                }
                            }}
                            onDragEnter={() => {
                                dragOverRef.current = new Pos({ i: BOARD_SIZE - i - 1, j });
                            }}
                        />
                    ))}
                </>
            ))}

            <div />

            {letters.map((l) => (
                <SytledXTile key={l}>{l}</SytledXTile>
            ))}
        </StyledTable>
    );
};

const StyledTable = styled.div`
    display: grid;
    grid-template-columns: repeat(9, auto);
    grid-template-rows: repeat(9, auto);
`;

const SytledXTile = styled.span`
    display: flex;
    width: calc(100px - 20px);
    justify-content: center;
    padding: 10px;
    user-select: none;
`;

const SytledYTile = styled.span`
    display: flex;
    height: calc(100px - 20px);
    align-items: center;
    padding: 10px;
    user-select: none;
`;
