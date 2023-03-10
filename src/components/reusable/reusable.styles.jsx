import styled, {css} from "styled-components";

export const ButtonBase = css`
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    background-color: var(--green-clr);
    padding: 5px 10px;
    text-align: center;
    font-size: 1.2rem;
    cursor: pointer;
    filter: brightness(150%);
    &:hover {
        filter: brightness(250%);
    }
    &:disabled {
        filter: brightness(90%);
    }
`

export const StyledEmptyMessage = styled.div`
    margin-top: 10vh;
    text-align: center;
    text-transform: capitalize;
    font-size: 2rem;
    color: var(--green-clr-light);
`