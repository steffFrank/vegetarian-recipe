import styled from "styled-components";
import { Link } from "react-router-dom";
import { FavoriteButton } from "../favoriteButton/favoriteButton.component";
import { StyledFavoriteButton } from "../favoriteButton/favoriteButton.component.styles";

export const StyledLink  = styled(Link)`
    position: relative;
    border-radius: 10px;
    color: #FFF;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
`
export const StyledArticle = styled.article`
    position: relative;
    height: clamp(280px, 15vw, 350px);
    mix-blend-mode: darken;
`

export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    position: relative;
`

export const StyledTitle = styled.h2`
    position: absolute;
    bottom: 0;
    padding: 20px 10px;
    z-index: 100;
    width: 60%;
`

export const StyledButton = styled.div`
    /* display: block; */
    position: absolute;
    right: 10px;
    bottom: 10px;
`