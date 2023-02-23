import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledBar = styled.div`
    width: min(100%, 400px);
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
    border-radius: 5px;
    background-color: var(--secondary-color);
    color: var(--green-clr);
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    transform: ${props => props.isOpen  ? `rotate(180deg)` : `rotate(0deg)`};
    transition: all 0.4s cubic-bezier(0.215, 0.610, 0.355, 1);
`;

export const StyledBox = styled.div`
    width: min(100%, 400px);
    margin: auto;
    position: relative;
    border: 1px solid var(--secondary-color);
    border-radius: 5px;
    padding: 5px;
    top: -1px;
    display: ${props => props.isOpen ? "block" : "none"};
    
    li {
        list-style-type: none;
        font-size: 0.8rem;
    }
`;