import styled from "styled-components";


export const StyledFavoriteButton = styled.div` 
    width: fit-content;
    height: fit-content;
    font-size: 2.5rem;
    color: ${props => props.isFavorite ? `var(--secondary-color)` : `var(--bg-color)`};
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);

    div {
        display: none;
    }
    &:hover {
        color: ${props => props.isFavorite ? `var(--bg-color)` : `var(--secondary-color)`};
        
        div {
            display: block;
            position: absolute;
            top: -10px;
            right: 0;
            text-align: center;
            width: 180px;
            font-size: 1.1rem;
            text-align: center;
            color: ${props => props.isFavorite ? `var(--bg-color)` : `var(--secondary-color)`};
        }
    }
`