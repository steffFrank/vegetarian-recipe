import styled from "styled-components";

export const StyledSection = styled.section`
    width: 100%;
    padding: 5px;
    margin-bottom: 30px;
    h1 {
        text-align: center;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-weight: 700;
        color: var(--green-clr);
    }
`;
export const StyledParagraph = styled.div`
    font-size: 0.8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
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
