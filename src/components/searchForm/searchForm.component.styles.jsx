import styled from "styled-components";
import { ButtonBase } from "../reusable/reusable.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledForm = styled.form`
    width: min(90vw, 700px);
    height: 52px;
    margin: auto;
    margin-bottom: 40px;
    display: flex;
`;

export const StyledInput = styled.input`
    width: 80%;
    padding: 5px 10px;
    border: 1px solid var(--secondary-color);
    border-right: transparent;
    border-radius: 5px 0 0 5px;
    font-size: 1.2rem;
    outline: none;
    &:focus {
        border-color: var(--green-clr);
    }
`;

export const StyledButtonIcon = styled(FontAwesomeIcon)`
    @media (min-width: 768px) {
        display: none;
    }
`;

export const StyledButtonText = styled.span`
    display: none;
    @media (min-width: 768px) {
        display: inline;
        font-size: 1.4rem;
    }
`;

export const StyledButtonSearch = styled.button`
    ${ButtonBase};
    width: 20%;
    border-left: transparent;
    border-radius: 0 5px 5px 0;
`;
