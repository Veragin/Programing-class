import { Tile } from "./Tile";
import styled from "styled-components";

const App = () => {
    return (
        <div className="App">
            <Tile title="Chess lesson">
                <StyledBox>asdas</StyledBox>
            </Tile>
        </div>
    );
};

const StyledBox = styled.div`
    background-color: green;
    padding: 50px;
`;

export default App;
