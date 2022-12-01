import styled from "styled-components";
import { Chess } from "../Chess/Chess";
import { BOARD_SIZE } from "../Chess/Const";
import { letters } from "../Chess/Pos";
import { Tile } from "./Tile";

type Props = {
    chess: Chess;
};

export const ChessBoard = ({ chess }: Props) => {
    const board = chess.getBoard();

    return (
        <StyledTable>
            {board.reverse().map((row, i) => (
                <>
                    <SytledYTile>{BOARD_SIZE - i}</SytledYTile>

                    {row.map((tileBoardExport, j) => (
                        <Tile
                            key={j}
                            color={(i + j) % 2 ? "black" : "white"}
                            tileBoardExport={tileBoardExport}
                        />
                    ))}
                </>
            ))}

            <div />

            {letters.map((l) => (
                <SytledXTile>{l}</SytledXTile>
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
`;

const SytledYTile = styled.span`
    display: flex;
    height: calc(100px - 20px);
    align-items: center;
    padding: 10px;
`;
