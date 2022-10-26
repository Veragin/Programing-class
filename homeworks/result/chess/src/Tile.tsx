import styled from "styled-components";

type Props = {
    title: string;
    children: React.ReactNode;
};

export const Tile = ({ title, children }: Props) => {
    return (
        <StyledDiv>
            <StyledSpan>{title}</StyledSpan>
            {children}
        </StyledDiv>
    );
};

const StyledSpan = styled.span`
    color: red;
    font-size: 25px;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`;
