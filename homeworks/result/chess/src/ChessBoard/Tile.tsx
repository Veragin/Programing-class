import styled from "styled-components";
import { getPieceImage } from "./ImageStore";

const WHITE_TILE_COLOR = "#F6E5C6";
const BLACK_TILE_COLOR = "#17753C";

type Props = {
    color: "white" | "black";
    tileBoardExport: TBoardTileExport;
    indicator?: boolean;
    onClick: () => void;
    onDragStart: () => void;
    onDragEnd: () => void;
    onDragEnter: () => void;
};

export const Tile = ({
    color,
    tileBoardExport,
    indicator,
    onClick,
    onDragEnd,
    onDragStart,
    onDragEnter,
}: Props) => {
    const imgSrc = getPieceImage(tileBoardExport);

    return (
        <StyledCont
            $isClickable={!!imgSrc || indicator}
            $isBlack={color === "black"}
            onClick={onClick}
            onDragEnter={onDragEnter}
        >
            {imgSrc && <StyledImg src={imgSrc} onDragStart={onDragStart} onDragEnd={onDragEnd} />}
            {indicator && <StyledIndicator />}
        </StyledCont>
    );
};

const StyledCont = styled.div<{ $isBlack: boolean; $isClickable?: boolean }>`
    width: 100px;
    height: 100px;
    background-color: ${({ $isBlack }) => ($isBlack ? BLACK_TILE_COLOR : WHITE_TILE_COLOR)};
    position: relative;
    cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "default")};
`;

const StyledIndicator = styled.div`
    width: 40px;
    height: 40px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    top: 30px;
    left: 30px;
`;

const StyledImg = styled.img`
    width: 100px;
    height: 100px;
`;
