import styled from "styled-components";

export const StyledSection = styled.section`
    width : 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    h1 {
        font-size: clamp(5rem, 25vw, 15rem);
        font-weight: 900;
        color: var(--green-clr);
    }

    p:first-of-type {
        font-size: clamp(1.2rem, 25vw, 3rem);
        color: var(--primary-color);
    }
    p > i {
        font-size: clamp(0.8rem, 50vw, 2rem);
        color: var(--secondary-color);
    }
`;