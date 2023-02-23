import styled from "styled-components";

export const StyledSection = styled.section`
    width: 100%;
    padding: 5px;
    h1 {
        text-align: center;
        margin-bottom: 10px;
        text-transform: uppercase;
        font-weight: 700;
        color: var(--green-clr);
    }
`;

export const StyledImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const StyledInstruction = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;

    h2 {
        text-align: center;
        text-transform: uppercase;
    }
`
