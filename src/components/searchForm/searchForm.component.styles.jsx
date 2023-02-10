import styled from "styled-components";
import { ButtonBase } from "../reusable/reusable.styles";

export const StyledForm = styled.form`
    width: min(90vw, 500px);
    padding: 10px;
    margin: auto;
    margin-bottom: 30px;
`;

export const StyledInput = styled.input`
    width: 80%;
    padding: 5px 10px;
    border: 1px solid var(--secondary-color);
    border-right: transparent;
    height: 40px;
    border-radius: 5px 0 0 5px;
    font-size: 1.2rem;
    &:focus {
        outline: 1px solid var(--green-clr);
    }
`;
export const StyledButtonSearch = styled.button`
    ${ButtonBase};
    width: 20%;
    border-left: transparent;
    height: 42px;
    border-radius: 0 5px 5px 0;
`
