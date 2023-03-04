import {css} from "styled-components";

export const ButtonBase = css`
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    background-color: var(--green-clr);
    padding: 5px 10px;
    text-align: center;
    align-self: center;
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