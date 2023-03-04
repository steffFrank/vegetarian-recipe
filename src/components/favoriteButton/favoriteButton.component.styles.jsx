import styled from "styled-components";


export const StyledFavoriteButton = styled.div` 
    width: fit-content;
    height: fit-content;
    font-size: 2.5rem;
    color: ${props => props.isFavorite ? `var(--secondary-color)` : `var(--bg-color)`};
    cursor: pointer;
    span {
        display: none;
    }
    &:hover {
        span {
            position: absolute;
            display: block;
            width: 200px;
            font-size: 1.1rem;
            top: -25px;
            left: -140px;
            text-align: center;
            color: ${props => props.isFavorite ? `var(--bg-color)` : `var(--secondary-color)`};
        }
    }
`