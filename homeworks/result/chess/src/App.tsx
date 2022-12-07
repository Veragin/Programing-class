import styled from "styled-components";
import { Chess } from "./Chess/Chess";
import { ChessBoard } from "./ChessBoard/ChessBoard";
import { Test } from "./Test";

const chess = new Chess();

const App = () => {
    return (
        <>
            <StyledTitle>Chess lesson</StyledTitle>
            <ChessBoard chess={chess} />
        </>
    );
};

const StyledTitle = styled.span`
    font-size: 4em;
    padding: 20px;
`;

export default App;
