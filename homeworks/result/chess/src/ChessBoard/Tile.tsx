import styled from "styled-components";
import { getPieceImage } from "./ImageStore";

const WHITE_TILE_COLOR = "#F6E5C6";
const BLACK_TILE_COLOR = "#17753C";

type Props = {
    color: "white" | "black";
    tileBoardExport: TBoardTileExport;
    indicator?: boolean;
};

export const Tile = ({ color, tileBoardExport, indicator }: Props) => {
    const imgSrc = getPieceImage(tileBoardExport);

    return (
        <StyledCont $isBlack={color === "black"}>{imgSrc && <StyledImg src={imgSrc} />}</StyledCont>
    );
};

const StyledCont = styled.div<{ $isBlack: boolean }>`
    width: 100px;
    height: 100px;
    background-color: ${({ $isBlack }) => ($isBlack ? BLACK_TILE_COLOR : WHITE_TILE_COLOR)};
`;

const StyledImg = styled.img`
    width: 100px;
    height: 100px;
`;
