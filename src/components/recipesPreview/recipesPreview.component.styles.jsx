import styled from "styled-components";

export const StyledSection = styled.section`
    width: min(90vw, 1200px);
    height: 70vh;
    padding: 10px 20px;
    border: 1px solid var(--green-clr);
    margin: auto;
    border-radius: 5px;
    overflow-y: scroll;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`