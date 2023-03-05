import styled from "styled-components";

export const StyledSection = styled.section`
    width: 100%;
    padding: 5px;
    margin-bottom: 30px;
    h1 {
        font-size: clamp(1.2rem, 2vw, 1.8rem);
        text-align: center;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-weight: 700;
        color: var(--green-clr);
    }
    h2 {
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 10px;
    }
`;
export const StyledParagraph = styled.div`
    font-size: clamp(1rem, 2vw, 1.5rem);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
    svg {
        color: var(--secondary-color);
        margin: 0 5px;   
    }
`;

export const StyledImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const StyledInstruction = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`
